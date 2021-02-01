import React from 'react'
import styled from 'styled-components'
import { Img } from './SceneImage'
import Div from '@atoms/Div'

const Wrapper = styled(Div)`
  max-width: ${props => props.width}px;
  position: relative;

  ${Img} {
    position: absolute;
  }

  [data-id=background] {
    top: 2.5%;
    left: 2%;
    z-index: 0;
  }

  [data-id=doodle] {
    top: 18.7%;
    left: 3.9%;
    z-index: 1;
  }

  [data-id=present-left] {
    top: 37.5%;
    left: 7.75%;
    z-index: 2;
  }

  [data-id=present-right] {
    top: 35.15%;
    left: 56.8%;
    z-index: 2;
  }

  [data-id=tag] {
    top: 9.75%;
    left: 22.4%;
    z-index: 3;
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Ratio = styled(Div)`
  // https://css-tricks.com/aspect-ratio-boxes/
  height: 0;
  padding-top: ${props => props.height / props.width * 100}%;
`

export default function BuyGive ({ children, meta, ...rest }) {
  const { height, width } = meta

  return (
    <Wrapper width={width} {...rest}>
      <Ratio width={width} height={height} />
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}
