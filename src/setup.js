import * as THREE from 'three'

import { colors } from './utils'

export function setLight (scene) {
  const ambientLight = new THREE.AmbientLight(colors.background)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(colors.white)
  directionalLight.position.set(1, 0.75, 0.5).normalize()
  scene.add(directionalLight)
}
