import React from 'react'
import { Consumer } from './Observer'

function Section({ children, onReveal }) {
  return (
    <Consumer>
      {cb => <div ref={el => cb(el, onReveal)}>{children}</div>}
    </Consumer>
  )
}

export default Section
