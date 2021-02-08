import React, { useState } from 'react'

// data
import useScenery from './useScenery'

// Scenes
import BuyGive from './BuyGive'
import FoodDesert from './FoodDesert'
import Gardener from './Gardener'
import PlantHand from './PlantHand'
import WaterCan from './WaterCan'

// Scene building blocks
import SceneImage from './SceneImage'
import { Content, Ratio } from '@molecules/Ratio'
import { Section } from '@molecules/Scroll'

// Content
const label = new Map()

label.set(PlantHand, 'Illustration of a hand holding a growing plant')
label.set(WaterCan, 'Illustration of watering can')
label.set(BuyGive, 'Illustration of two boxes')
label.set(FoodDesert, 'Illustration of grocery shelf')
label.set(Gardener, 'Illustration of person holding plant')

/**
 * Creates an interactive "image"
 * 
 * @param {Boolean} props.buygive    - scene type
 * @param {Boolean} props.fooddesert - scene type
 * @param {Boolean} props.gardener   - scene type
 * @param {Boolean} props.planthand  - scene type
 * @param {Boolean} props.watercan   - scene type
 * @param {Boolean} props.lazy       - 
 */
export default function Scene (props) {
  const {
    buygive = false,
    fooddesert = false,
    gardener = false,
    planthand = false,
    watercan = false,
    ...passThrough
  } = props

  const scenePropMatch = [
      buygive,
      fooddesert,
      gardener,
      planthand,
      watercan
    ]
    .filter(s => s)

  if (scenePropMatch.length > 1) {
    console.warn(`<Scene> expects a single boolean prop but received ${scenePropMatch.join(', ')}`)
  }

  let Component
  let scene

  const scenery = useScenery()

  if (planthand) {
    Component = PlantHand
    scene = scenery.PlantHand
  } else if (watercan) {
    Component = WaterCan
    scene = scenery.WaterCan
  } else if (buygive) {
    Component = BuyGive
    scene = scenery.BuyGive
  } else if (fooddesert) {
    Component = FoodDesert
    scene = scenery.FoodDesert
  } else if (gardener) {
    Component = Gardener
    scene = scenery.Gardener
  }

  const { width, height } = scene.meta

  const [hasLoaded, setHasLoaded] = useState(false)
  function loadOnce ({ isIntersecting }) {
    if (isIntersecting && !hasLoaded) {
      setHasLoaded(true)
    }
  }

  return Component ? (
    <Section onReveal={loadOnce}>
      <Component
        aria-label={label.get(Component)}
        role="img"
        width={width}
        {...passThrough}
      >
        <Ratio width={width} height={height} />
        <Content>
          {Object.entries(scene.data).map(([key, value]) => (
            <SceneImage
              key={key}
              name={key}
              scene={scene}
              load={hasLoaded}
              {...value}
            />
          ))}
        </Content>
      </Component>
    </Section>
  ) : null
}
