import * as THREE from 'three'

import { CASE, colors, getRandomBetween } from './utils'
import GeneralLights from './sceneObjects/GeneralLights'
import Grid from './sceneObjects/Grid'
import Square from './sceneObjects/Square'
import Player from './sceneObjects/Player'

class SceneManager {
  constructor (canvas) {
    this.canvas = canvas

    this.screenDimensions = {
      width: canvas.width,
      height: canvas.height
    }

    this.scene = this.buildScene()
    this.renderer = this.buildRenderer(this.screenDimensions)
    this.camera = this.buildCamera(this.screenDimensions)
    this.sceneObjects = this.createSceneObjects(this.scene)

    console.log(this.sceneObjects)
  }

  buildScene () {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(colors.background)

    return scene
  }

  buildRenderer ({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: this.canvas,
      alpha: true
    })
    renderer.setPixelRatio(window.devicePixelRatio || 1)
    renderer.setSize(width, height)

    return renderer
  }

  buildCamera ({ width, height }) {
    const aspectRatio = width / height
    const fieldOfView = 45
    const nearPlane = 0.1
    const farPlane = 10000 // 100;
    const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane)

    camera.position.set(400, 800, 1200)
    camera.lookAt(0, 0, 0)

    return camera
  }

  createSceneObjects (scene) {
    const sceneObjects = [
      new GeneralLights(scene),
      new Grid(scene),
      new Player(scene, { x: 0, y: 0, z: 450 })
    ]

    // Make squares
    for (let i = 0; i < 20; i++) {
      /* eslint-disable no-new */
      sceneObjects.push(
        new Square(scene, { x: 450, y: 0, z: 450 - i * CASE })
      )
      sceneObjects.push(
        new Square(scene, { x: -500, y: 0, z: 450 - i * CASE })
      )
      sceneObjects.push(
        new Square(scene, { x: getRandomBetween(), y: 0, z: getRandomBetween() })
      )
      /* eslint-enable no-new */
    }

    return sceneObjects
  }

  update () {
    // This cause lag
    for (let i = 0; i < this.sceneObjects.length; i++) {
      // this.sceneObjects[i].update()
    }

    this.renderer.render(this.scene, this.camera)
  }

  onWindowResize () {
    const { width, height } = this.canvas

    this.screenDimensions.width = width
    this.screenDimensions.height = height

    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(width, height)
  }

  // TODO : Move this logic otherwhere
  moveTo (direction) {
    const player = this.scene.children.find(mesh => mesh.name === 'player')

    switch (direction) {
      case 'top':
        player.position.z -= CASE
        break
      case 'bottom':
        player.position.z += CASE
        break
      case 'left':
        player.position.x -= CASE
        break
      case 'right':
        player.position.x += CASE
        break

      default:
        break
    }
  }
}

export default SceneManager
