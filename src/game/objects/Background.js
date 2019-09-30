import Phaser from 'phaser'

export default class Background extends Phaser.GameObjects.Image {
  constructor (scene, width, height) {
    super(scene, width / 2, height / 2, 'background')
    this.scene = scene

    scene.add.existing(this, false)

    this.setDisplaySize(width, height)
    // this.setVisible(false)
    this.setAlpha(0.5)
  }
}
