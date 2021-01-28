import React, { useContext, useEffect, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'

const Img = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`

export default function SceneImage ({ base64, height, name, retina, standard, width }) {
  const [image, setImage] = useState(base64)
  const theme = useContext(ThemeContext)

  useEffect(() => {
    const onLoad = () => setImage(src)
    const src = window.matchMedia(theme.screen.retina) ? retina : standard

    const img = new Image()
    img.addEventListener('load', onLoad)
    img.src = src

    return () => {
      img.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <Img
      data-id={name}
      image={image}
      height={height}
      width={width}
    />
  )
}
