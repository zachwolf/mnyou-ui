import React from 'react'
import useScenery from './useScenery'
import PlantHand from './PlantHand'
import WaterCan from './WaterCan'
import SceneImage from './SceneImage'

export default function Scene (props) {
  const {
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
