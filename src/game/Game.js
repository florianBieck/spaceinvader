import BasicScene from './scenes/BasicScene'
import * as Phaser from 'phaser'

const gameConfig = {
  type: Phaser.AUTO,
  scale: {
    parent: 'game-container',
    mode: Phaser.Scale.RESIZE
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: [BasicScene]
}

function launch () {
  return new Phaser.Game(gameConfig)
}

export default launch
export { launch }
