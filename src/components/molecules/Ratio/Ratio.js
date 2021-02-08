import React from 'react'
import styled from 'styled-components'
import Div from '@atoms/Div'

const Ratio = styled(Div)`
  // https://css-tricks.com/aspect-ratio-boxes/
  height: 0;
  padding-top: ${props => props.height / props.width * 100}%;
`

export default Ratio
