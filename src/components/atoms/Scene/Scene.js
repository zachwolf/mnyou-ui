import React from 'react'
import useScenery from './useScenery'
import PlantHand from './PlantHand'
import SceneImage from './SceneImage'

export default function Scene ({ planthand = false, ...rest }) {
  let Component
  let scene
  let label

  const scenery = useScenery()

  if (planthand) {
    Component = PlantHand
    scene = scenery.PlantHand
    label = 'Illustration of a hand holding a growing plant'
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
