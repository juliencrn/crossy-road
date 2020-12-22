import * as THREE from 'three'

import { colors } from '../utils'
import SceneObject from './SceneObject'

class GeneralLights extends SceneObject {
  constructor (scene) {
    super(scene)

    const ambientLight = new THREE.AmbientLight(colors.background)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(colors.white)
    directionalLight.position.set(1, 0.75, 0.5).normalize()
    scene.add(directionalLight)
  }
}

export default GeneralLights
