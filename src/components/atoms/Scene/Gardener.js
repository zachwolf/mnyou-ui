import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '@molecules/Ratio'

const Gardener = styled(Wrapper)`
  [data-id=back-arm] {
    top: 44.95%;
    left: 38.65%;
    z-index: 2;
  }

  [data-id=background] {
    top: 5.55%;
    left: 14.35%;
    z-index: 0;
  }

  [data-id=body] {
    top: 22.9%;
    left: 45%;
    z-index: 3;
  }

  [data-id=doodle] {
    top: 2.5%;
    left: 8%;
    z-index: 1;
  }

  [data-id=front-arm] {
    top: 40.5%;
    left: 37.1%;
    z-index: 5;
  }

  [data-id=legs] {
    top: 24%;
    left: 40.9%;
    z-index: 4;
  }

  [data-id=plant] {
    top: 44.2%;
    left: 5%;
    z-index: 4;
  }
`

export default Gardener
