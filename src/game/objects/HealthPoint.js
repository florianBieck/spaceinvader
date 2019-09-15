import Phaser from 'phaser'

export default class HealthPoint extends Phaser.GameObjects.Image {
  constructor (scene, x, y) {
    const size = 32
    super(scene, x, y, 'heart')
    this.size = size
    this.scene = scene

    this.setData('blockwidth', 1)
    this.setData('blockheight', 1)

    scene.add.existing(this, false)

    this.setDisplaySize(this.size, this.size)
  }
}
