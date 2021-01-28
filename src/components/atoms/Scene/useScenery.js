import { graphql, useStaticQuery } from 'gatsby'
import { basename, dirname, extname, sep } from 'path'

/**
 * [1] Response shape:
    ```
      {
        "standard": {
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
        "retina": {
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
        }
      }
    ```
 *
 * [2] Resulting data shape
    ```
      {
        "<Directory_Name>": {
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
        ...,
        ...,
        ...
      }
    ```
 */

export default function useScenery () {
  // [1]
  const queryRes = useStaticQuery(graphql`
    query ImageQuery {
      standard: allFile(
        filter: {
          relativePath: { glob: "Scene/**/*" }
          name: { regex: "/^[^@]+$/" }
          extension: { eq: "png" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed {
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
      retina: allFile(
        filter: {
          relativePath: { glob: "Scene/**/*" }
          name: { regex: "/^.+@/" }
          extension: { eq: "png" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed {
                originalName
                src
              }
            }
          }
        }
      }
    }
  `)

  // [2]
  return formatData(queryRes)
}

/**
 * Beautify graphQL's response
 * 
 * @param  {Object} lists
 * @param  {Array}  lists.standard actual size image data
 * @param  {Array}  lists.retina   2x imagess
 * @return {Object}
 */
function formatData (lists) {
  const { standard, retina } = lists
  const standardMap = loop(
    standard.edges,
    {},
    (res, { scene, name, src, ...rest }) => {
      res[scene] = {
        ...res[scene],
        [name]: {
          standard: src,
          ...rest,
        }
      }
    })
  const fullMap = loop(
    retina.edges,
    standardMap,
    (res, { scene, name, src, ...rest }) => {
      Object.assign(res[scene][name], {
        retina: src,
        ...rest
      })
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
  function loop (list, data, fn) {
    const res = Object.assign({}, data)

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

        fn(res, {
          scene,
          name,
          ...rest,
        })
      })

    return res
  }
}
