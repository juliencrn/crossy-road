import * as THREE from 'three'

import { createCubes } from './shapes'
import { setLight } from './setup'
import { colors, getRandomBetween, CASE } from './utils'

function main () {
  // Setup the scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(colors.background)

  setLight(scene)

  // create cubes
  const createCube = createCubes(scene)

  for (let i = 0; i < 19; i++) {
    createCube(450, 0, 450 - i * CASE)
    createCube(-500, 0, 450 - i * CASE)
    createCube(getRandomBetween(), 0, getRandomBetween())
  }

  // Grid
  const gridHelper = new THREE.GridHelper(1000, 20, colors.yellow, colors.yellow)
  scene.add(gridHelper)

  // Camera
  const ratio = window.innerWidth / window.innerHeight
  const camera = new THREE.PerspectiveCamera(45, ratio, 1, 10000)
  camera.position.set(400, 800, 1200)
  camera.lookAt(0, 0, 0)

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.render(scene, camera)

  // Mount the canvas element in the DOM
  const rootElement = document.getElementById('app')
  rootElement.appendChild(renderer.domElement)
}

main()
