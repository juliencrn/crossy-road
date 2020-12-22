import * as THREE from 'three'

import { colors } from '../utils'
import SceneObject from './SceneObject'

class Grid extends SceneObject {
  constructor (scene) {
    super(scene)

    const size = 1000
    const division = 20
    const color = colors.yellow
    const gridHelper = new THREE.GridHelper(size, division, color, color)
    scene.add(gridHelper)
  }
}

export default Grid
