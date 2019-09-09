import BasicScene from './scenes/BasicScene'
import * as Phaser from 'phaser'

function launch () {
  this.game = new Phaser.Game({
    type: Phaser.AUTO,
    scale: {
      width: 1900,
      height: 900,
      mode: Phaser.Scale.FIT,
      parent: 'game-container',
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    scene: [BasicScene]
  })
}

export default launch
export { launch }
