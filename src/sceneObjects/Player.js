import * as THREE from 'three'

import { colors, CASE } from '../utils'
import SceneObject from './SceneObject'

class Player extends SceneObject {
  constructor (scene, position) {
    super(scene)

    const cubeGeo = new THREE.BoxBufferGeometry(CASE, CASE, CASE)
    const cubeMaterial = new THREE.MeshLambertMaterial({
      color: colors.red
    // map: new THREE.TextureLoader().load('/assets/textures/grass.jpg')
    })

    const { x, y, z } = position
    const cube = new THREE.Mesh(cubeGeo, cubeMaterial)
    cube.position.set(x, y, z)
    cube.position.divideScalar(CASE).floor().multiplyScalar(CASE).addScalar(CASE / 2)
    cube.name = 'player'

    this.mesh = cube

    scene.add(cube)
  }

  // moveTo (direction) {
  //   switch (direction) {
  //     case 'top':
  //       this.mesh.position.z -= CASE
  //       break
  //     case 'bottom':
  //       this.mesh.position.z += CASE
  //       break
  //     case 'left':
  //       this.mesh.position.x -= CASE
  //       break
  //     case 'right':
  //       this.mesh.position.x += CASE
  //       break

  //     default:
  //       break
  //   }
  // }
}

export default Player
