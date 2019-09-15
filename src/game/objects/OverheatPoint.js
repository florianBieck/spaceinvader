import Phaser from 'phaser'

export default class OverheatPoint extends Phaser.GameObjects.Image {
  constructor (scene, x, y, size) {
    super(scene, x, y, 'fireEmpty')
    this.size = size
    this.scene = scene

    this.setData('blockwidth', 1)
    this.setData('blockheight', 1)

    scene.add.existing(this, false)

    this.setDisplaySize(size, size)
  }
}
