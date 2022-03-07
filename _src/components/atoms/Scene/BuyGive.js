import styled from 'styled-components'
import { Wrapper } from '@molecules/Ratio'

const BuyGive = styled(Wrapper)`
  [data-id='background'] {
    top: 2.5%;
    left: 2%;
    z-index: 0;
  }

  [data-id='doodle'] {
    top: 18.7%;
    left: 3.9%;
    z-index: 1;
  }

  [data-id='present-left'] {
    top: 37.5%;
    left: 7.75%;
    z-index: 2;
  }

  [data-id='present-right'] {
    top: 35.15%;
    left: 56.8%;
    z-index: 2;
  }

  [data-id='tag'] {
    top: 9.75%;
    left: 22.4%;
    z-index: 3;
  }
`

export default BuyGive
