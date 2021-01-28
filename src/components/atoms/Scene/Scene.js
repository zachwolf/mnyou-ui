import React from 'react'
import useScenery from './useScenery'
import PlantHand from './PlantHand'
import SceneImage from './SceneImage'

export default function Scene ({ planthand = false, ...rest }) {
  let Component
  let data

  const scenery = useScenery()

  if (planthand) {
    Component = PlantHand
    data = scenery.PlantHand
  }

  return Component ? (
    <Component {...rest}>
      {Object.entries(data).map(([key, value]) => (
        <SceneImage key={key} name={key} {...value} />
      ))}
    </Component>
  ) : null
}
