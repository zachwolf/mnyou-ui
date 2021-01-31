import { graphql, useStaticQuery } from 'gatsby'
import { basename, dirname, extname, sep } from 'path'

/**
 * [1] Response shape:
    ```
      {
        "standard": { // [1a]
          "edges": [
            // filter out results where `childImageSharp == null`
            {
              "node": {
                "relativePath": "Scene/<Directory_Name_tmp000000000>",
                "childImageSharp": null
              }
            },
            {
              "node": {
                // use `relativePath`s to group directories
                "relativePath": "Scene/<Directory_Name>/<Image_Name>.png",
                "childImageSharp": {
                  "fixed": {
                    // tiny ~20x20px placeholder
                    "base64": "data:image/png;base64,...",
                    "originalName": "<Image_Name>.png",
                    "height": <Number>,
                    "width": <Number>,
                    "src": "/static/<hash>/<hash>/<Image_Name>.png"
                  }
                }
              }
            },
            ...,
            ...,
            ...
          ]
        },
        "retina": { // [1b]
          "edges": [
            {
              "node": {
                "relativePath": "Scene/<Directory_Name>/<Image_Name>@2x.png",
                "childImageSharp": {
                  "fixed": {
                    "originalName": "<Image_Name>@2x.png",
                    "src": "/static/<hash>/<hash>/<Image_Name>@2x.png"
                  }
                }
              }
            },
            ...,
            ...,
            ...
          ]
        },
        "scale": { // [1c]
          "edges": [
            {
              "node": {
                "relativePath": "Scene/<Directory_Name>/scale.png",
                "childImageSharp": {
                  "fixed": {
                    "height": <Number>,
                    "width": <Number>
                  }
                }
              }
            }
          ]
        }
      }
    ```
 *
 * [2] 
 * 
 * [3] Resulting data shape
    ```
      {
        "<Directory_Name>": {
          "data": {
            "<Image_Name>": {
              "standard": "/static/<hash>/<hash>/<Image_Name>.png",
              "base64": "data:image/png;base64,...",
              "height": <Number>,
              "width": <Number>,
              "retina": "/static/<hash>/<hash>/<Image_Name>@2x.png"
            },
            ...,
            ...,
            ...,
          },
          "meta": {
            "height": <Number>,
            "width": <Number>,
          },
        },
        ...,
        ...,
        ...
      }
    ```
 */

export default function useScenery () {
  // [1]
  const imgData = useStaticQuery(graphql`
    query ImageQuery {
      # [1a]
      standard: allFile(
        filter: {
          relativePath: { glob: "Scene/**/*" }
          name: { ne: "scale" regex: "/^[^@]+$/" }
          extension: { eq: "png" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed (width: 1000) {
                base64
                originalName
                height
                width
                src
              }
            }
          }
        }
      }
      # [1b]
      retina: allFile(
        filter: {
          relativePath: { glob: "Scene/**/*" }
          name: { ne: "scale@2x" regex: "/^.+@/" }
          extension: { eq: "png" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed (width: 2000) {
                originalName
                src
              }
            }
          }
        }
      }
      # [1c]
      scale: allFile(
        filter: {
          relativePath: { glob: "Scene/**/*" }
          name: { eq: "scale" }
          extension: { eq: "png" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed (width: 1000) {
                height
                width
              }
            }
          }
        }
      }
    }
  `)

  // [3]
  return formatImageData(imgData)
}

/**
 * Beautify graphQL's response
 *
 * @param  {Object} lists
 * @param  {Array}  lists.standard actual size image data
 * @param  {Array}  lists.retina   2x imagess
 * @return {Object}
 */
function formatImageData (lists) {
  const { scale, standard, retina } = lists

  // [1]
  const standardMap = reduce(
    standard.edges,
    {},
    (res, { scene, name, src, ...rest }) => ({
      ...res,
      [scene]: {
        data: {
          ...res[scene]?.data,
          [name]: {
            standard: src,
            ...rest,
          }
        }
      }
    }))

  const retinaMap = reduce(
    retina.edges,
    standardMap,
    (res, { scene, name, src }) => {
      res[scene].data[name].retina = src
      return res
    })

  const fullMap = reduce(
    scale.edges,
    retinaMap,
    (res, { scene, name, ...rest }) => {
      res[scene].meta = rest
      return res
    })

  return fullMap

  /**
   * Standardizes interating over non-standard response
   * 
   * @param  {Array}    List response's `edges`
   * @param  {Object}   data starting data
   * @param  {Function} fn   format data
   * @return {Object}        Mutated instance of `seed`
   */
  function reduce (list, data, fn) {
    let prev = Object.assign({}, data)

    list
      .filter(edge => edge.node.childImageSharp)
      .forEach(({ node }) => {
        // 'Scene/<Directory_Name>/<Image_Name><@2x>.png'
        const { relativePath } = node
        // ['Scene', '<Directory_Name>']
        const dirList = dirname(relativePath).split(sep)
        // '<Directory_Name>'
        const scene = dirList[1]
        // '<Image_Name><@2x>.png'
        const { originalName, ...rest } = node.childImageSharp.fixed
        // '.png'
        const ext = extname(relativePath)
        // '<Image_Name>'
        const name = basename(relativePath, ext).replace('@2x', '')

        if (!scene) {
          throw new Error(`Unable to guess scene name. ${node}`)
        }

        if (!name) {
          throw new Error(`Unable to guess image name. ${node}`)
        }

        prev = fn(prev, {
          scene,
          name,
          ...rest,
        })
      })

    return prev
  }
}
