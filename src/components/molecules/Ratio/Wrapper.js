import React from 'react'
import styled from 'styled-components'
import Div from '@atoms/Div'

const Wrapper = styled(Div)`
  max-width: ${props => props.width}px;
  position: relative;
`

export default Wrapper
