import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Wrapper } from '@molecules/Ratio'

const query = {
  armBack: '[data-id=back-arm]',
  armFront: '[data-id=front-arm]',
  background: '[data-id=background]',
  body: '[data-id=body]',
  doodle: '[data-id=doodle]',
  legs: '[data-id=legs]',
  plant: '[data-id=plant]',
}

const GardenerStyled = styled(Wrapper)`
  ${query.armBack} {
    top: 44.95%;
    left: 38.65%;
    z-index: 2;
  }

  ${query.armFront} {
    top: 40.5%;
    left: 37.1%;
    z-index: 5;
  }

  ${query.background} {
    top: 5.55%;
    left: 14.35%;
    z-index: 0;
  }

  ${query.body} {
    top: 22.9%;
    left: 45%;
    z-index: 3;
  }

  ${query.doodle} {
    top: 2.5%;
    left: 8%;
    z-index: 1;
  }

  ${query.legs} {
    top: 24%;
    left: 40.9%;
    z-index: 4;
  }

  ${query.plant} {
    top: 44.2%;
    left: 5%;
    z-index: 4;
  }
`

function Gardener({ animate, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    let prevTimestamp
    let animationId

    const $ = Object.entries(query).reduce(
      (res, [name, selector]) => ({
        ...res,
        [name]: ref.current.querySelector(selector),
      }),
      {}
    )

    /*
    rotate(25deg) translateX(-16%) translateY(-6%);
     */

    function draw(timestamp) {
      let elapsed

      if (prevTimestamp) {
        elapsed = timestamp - prevTimestamp
      }

      prevTimestamp = timestamp

      if (ref?.current && animate) {
        animationId = window.requestAnimationFrame(draw)
      }
    }

    animationId = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(animationId)
    }
  }, [animate, ref])

  return <GardenerStyled ref={ref} {...rest} />
}

export default Gardener
