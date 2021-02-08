import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '@molecules/Ratio'

const WaterCan = styled(Wrapper)`
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

export default WaterCan
