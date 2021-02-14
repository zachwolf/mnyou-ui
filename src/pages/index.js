import React from 'react'
import Layout from '@utils/layout'
import Scene from '@atoms/Scene'
import { Observer } from '@molecules/Scroll'

const App = () => (
  <Layout>
    <div>
      <div>Solving Central Minnesota’s Food Deserts</div>
    </div>
    <div>
      <div>MNYou Inc. is a non-profit located in Willmar, MN.</div>
      Our mission is to get fresh, locally grown fruits and vegetables into the
      homes of those that most need them.
      <div></div>
      <div>
        We do this by bringing youth onto the farm to raise the vegetables and
        learn the business skills needed to become entrepreneurs.
      </div>
      <div>
        <Observer>
          <Scene gardener />
          <Scene planthand />
          <Scene watercan />
          <Scene buygive />
          <Scene fooddesert />
        </Observer>
      </div>
    </div>
  </Layout>
)

export default App
