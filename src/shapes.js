import * as THREE from 'three'

import { colors, CASE } from './utils'

export const createCubes = (scene) => {
  const cubeGeo = new THREE.BoxBufferGeometry(CASE, CASE, CASE)
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: colors.green
    // map: new THREE.TextureLoader().load('/assets/textures/grass.jpg')
  })

  return (x, y, z) => {
    const cube = new THREE.Mesh(cubeGeo, cubeMaterial)
    cube.position.set(x, y, z)
    cube.position.divideScalar(CASE).floor().multiplyScalar(CASE).addScalar(CASE / 2)
    scene.add(cube)
  }
}
