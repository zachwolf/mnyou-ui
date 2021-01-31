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
    top: 12%;
    left: 1.25%;
    z-index: 0;
  }

  [data-id=can] {
    top: 3%;
    left: 30.5%;
    z-index: 2;
  }

  [data-id=doodle] {
    top: 6%;
    left: 7.2%;
    z-index: 1;
  }

  [data-id=drops] {
    top: 52%;
    left: 23.2%;
    z-index: 2;
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

export default function WaterCan ({ children, meta, ...rest }) {
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
