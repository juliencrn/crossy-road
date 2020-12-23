import SceneManager from './SceneManager'

const canvas = document.getElementById('canvas')

const sceneManager = new SceneManager(canvas)

bindEventListeners()
render()

function bindEventListeners () {
  resizeCanvas()

  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', resizeCanvas)
}

function resizeCanvas () {
  canvas.style.width = '100%'
  canvas.style.height = '100%'

  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  sceneManager.onWindowResize()
}

function onKeydown (event) {
  const arrows = {
    37: 'left',
    38: 'top',
    39: 'right',
    40: 'bottom'
  }

  sceneManager.moveTo(arrows[event.keyCode] || undefined)
}

function render () {
  window.requestAnimationFrame(render)
  sceneManager.update()
}
