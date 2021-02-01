import React from 'react'
import useScenery from './useScenery'
import SceneImage from './SceneImage'
import BuyGive from './BuyGive'
import PlantHand from './PlantHand'
import WaterCan from './WaterCan'

export default function Scene (props) {
  const {
    buygive = false,
    planthand = false,
    watercan = false,
    ...rest
  } = props

  let Component
  let scene
  let label

  const scenery = useScenery()

  if (planthand) {
    Component = PlantHand
    scene = scenery.PlantHand
    label = 'Illustration of a hand holding a growing plant'
  } else if (watercan) {
    Component = WaterCan
    scene = scenery.WaterCan
    label = 'Illustration of watering can'
  } else if (buygive) {
    Component = BuyGive
    scene = scenery.BuyGive
    label = 'Illustration of two boxes'
  }

  return Component ? (
    <Component {...rest} meta={scene.meta} role="img" aria-label={label}>
      {Object.entries(scene.data).map(([key, value]) => (
        <SceneImage
          key={key}
          name={key}
          scene={scene}
          {...value}
        />
      ))}
    </Component>
  ) : null
}
