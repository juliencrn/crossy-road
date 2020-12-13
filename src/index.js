import * as THREE from 'three'

import { createCubes, createLine } from './shapes'

export function helloThreeJS (elementId) {
  // Create the scene
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    5, // FOV
    window.innerWidth / window.innerHeight,
    1, // Near
    1000 // Far
  )
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)

  const line = createLine()

  const geometry = new THREE.BoxGeometry(1, 1, 1)

  const createCube = createCubes(scene)
  const cubes = [
    createCube(geometry, 0x44aa88, 0),
    createCube(geometry, 0x8844aa, -2),
    createCube(geometry, 0xaa8844, 2)
  ]

  scene.add(line)

  const color = 0xFFFFFF
  const intensity = 1
  const light = new THREE.DirectionalLight(color, intensity)
  light.position.set(-1, 2, 4)
  scene.add(light)

  camera.position.z = 2
  camera.position.set(0, 0, 100)
  camera.lookAt(0, 0, 0)

  // Animate
  function animate (time) {
    time *= 0.001 // convertir le temps en secondes

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * 0.1
      const rot = time * speed
      cube.rotation.x = rot
      cube.rotation.y = rot
    })

    renderer.render(scene, camera)

    window.requestAnimationFrame(animate)
  }

  animate()

  // Mount the canvas element in the DOM
  const rootElement = document.getElementById(elementId)
  rootElement.appendChild(renderer.domElement)
}

helloThreeJS('app')
