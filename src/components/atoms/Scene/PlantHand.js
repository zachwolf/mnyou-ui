import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '@molecules/Ratio'

const PlantHand = styled(Wrapper)`
  [data-id=background] {
    left: 2%;
    top: 14%;
    z-index: 0;
  }

  [data-id=berry-left] {
    left: 4.5%;
    top: 16.325%;
    z-index: 2;
  }

  [data-id=berry-right] {
    left: 62.9%;
    top: 23.8%;
    z-index: 2;
  }

  [data-id=dirt] {
    left: 31.6%;
    top: 47.55%;
    z-index: 3;
  }

  [data-id=doodle] {
    left: 8%;
    top: 32%;
    z-index: 1;
  }

  [data-id=hand-back] {
    left: 58.35%;
    top: 54.95%;
    z-index: 2;
  }

  [data-id=hand-front] {
    left: 12.5%;
    top: 57.64%;
    z-index: 4;
  }

  [data-id=plant] {
    left: 36%;
    top: 1%;
    z-index: 2;
  }
`

export default PlantHand
