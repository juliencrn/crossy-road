/*
 * Note: This is a scene object prototype
 */

export default class SceneObject {
  constructor (scene) {
    this.scene = scene
  }

  update () {
    console.log(`${this.name} updated`)
  }
}
