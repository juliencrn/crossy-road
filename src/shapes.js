import * as THREE from 'three'

export function createLine () {
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff })

  const points = []
  points.push(new THREE.Vector3(-4, -2, 0))
  points.push(new THREE.Vector3(0, 2, 0))
  points.push(new THREE.Vector3(4, -2, 0))
  points.push(new THREE.Vector3(-4, -2, 0))

  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  const line = new THREE.Line(geometry, material)

  return line
}

export const createCubes = (scene) => (geometry, color, x) => {
  const material = new THREE.MeshPhongMaterial({ color })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  cube.position.x = x
  return cube
}
