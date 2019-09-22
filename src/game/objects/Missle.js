import Phaser from 'phaser'

export default class Missle extends Phaser.GameObjects.Sprite {
  constructor (scene, rocketBody, blockwidth) {
    const size = 32
    super(scene, rocketBody.x + (blockwidth / 2), rocketBody.y, 'missle')
    this.size = size
    this.scene = scene

    this.setData('speed', -500)
    this.setData('blockwidth', 1)
    this.setData('blockheight', 1)

    scene.add.existing(this, false)

    this.setDisplaySize(this.size, this.size)
    this.width = size
    this.height = size
    this.setAngle(-45)
  }

  move () {
    this.body.setVelocityY(-500)
  }
}
