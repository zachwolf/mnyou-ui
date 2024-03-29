import React, { useContext, useEffect, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Div from '@atoms/Div'

export const Img = styled(Div)`
  height: ${props => props.height}%;
  width: ${props => props.width}%;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`

export default function SceneImage(props) {
  const { base64, height, load, name, retina, scene, standard, width } = props

  const [image, setImage] = useState(base64)
  const theme = useContext(ThemeContext)

  if (load) {
    const onLoad = () => setImage(src)
    const src = window.matchMedia(theme.screen.retina) ? retina : standard

    const img = new Image()
    img.addEventListener('load', onLoad)

    img.src = src
  }

  return (
    scene && (
      <Img
        data-id={name}
        image={image}
        height={(height / scene.meta.height) * 100}
        width={(width / scene.meta.width) * 100}
      />
    )
  )
}
