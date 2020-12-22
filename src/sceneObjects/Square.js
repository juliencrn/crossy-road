import * as THREE from 'three'

import { colors, CASE } from '../utils'
import SceneObject from './SceneObject'

class Square extends SceneObject {
  constructor (scene, position) {
    super(scene)

    const cubeGeo = new THREE.BoxBufferGeometry(CASE, CASE, CASE)
    const cubeMaterial = new THREE.MeshLambertMaterial({
      color: colors.green
    // map: new THREE.TextureLoader().load('/assets/textures/grass.jpg')
    })

    const { x, y, z } = position
    const cube = new THREE.Mesh(cubeGeo, cubeMaterial)
    cube.position.set(x, y, z)
    cube.position.divideScalar(CASE).floor().multiplyScalar(CASE).addScalar(CASE / 2)
    cube.name = 'cube'
    scene.add(cube)
  }
}

export default Square
