import React, { createContext, useEffect, useState } from 'react'

const context = createContext()
const { Provider, Consumer } = context

const fnMap = new Map()

function Observer ({ children }) {
  const [observer, setObserver] = useState()

  useEffect(() => {
    function onChange (list) {
      list.forEach(entry => {
        if (entry.isIntersecting) {
          fnMap.get(entry.target)(entry)
        }
      })
    }

    setObserver(new IntersectionObserver(onChange/*, { default options } */))

    return function cleanUp () {
      /* todo? */
    }
  }, [])

  function bindObserver (el, fn) {
    if (observer && el) {
      observer.observe(el)
      fnMap.set(el, fn)
    }
  }

  return (
    <Provider value={bindObserver}>
      {children}
    </Provider>
  )
}

export default Observer
export {
  context,
  Consumer,
  Provider,
}
