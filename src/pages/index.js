import React from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby'

import Layout from '@utils/layout'

const Foo = tw(Link)`
  border-transparent
  text-gray-500
  hover:border-gray-300
  hover:text-gray-700
  inline-flex
  items-center
  px-1
  pt-1
  border-b-2
  text-sm
  font-medium
`

const App = () => (
  <Layout>
    <Foo>Tesst</Foo>
  </Layout>
)

export default App
