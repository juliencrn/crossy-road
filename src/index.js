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
    left: 37,
    top: 38,
    right: 39,
    bottom: 40
  }

  switch (Number(event.keyCode)) {
    case arrows.left:
      console.log('To left')
      sceneManager.moveTo('left')
      break
    case arrows.top:
      console.log('To top')
      sceneManager.moveTo('top')
      break
    case arrows.right:
      console.log('To right')
      sceneManager.moveTo('right')
      break
    case arrows.bottom:
      console.log('To bottom')
      sceneManager.moveTo('bottom')
      break

    default:

      break
  }
}

function render () {
  window.requestAnimationFrame(render)
  sceneManager.update()
}
