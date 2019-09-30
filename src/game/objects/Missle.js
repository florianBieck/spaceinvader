import Phaser from 'phaser'

export default class Missle extends Phaser.GameObjects.Sprite {
  constructor (scene, rocketBody, blockwidth) {
    const size = 32
    super(scene, rocketBody.x + (blockwidth / 2), rocketBody.y, 'missle')
    this.size = size
    this.scene = scene

    this.setData('speed', -800)
    this.setData('blockwidth', 1)
    this.setData('blockheight', 1)

    scene.add.existing(this, false)

    this.setDisplaySize(this.size, this.size)
    this.width = size
    this.height = size
    this.setAngle(-45)
  }

  move () {
    this.body.setVelocityY(this.data.get('speed'))
    this.body.setCollideWorldBounds(true)
    this.body.onWorldBounds = true
    this.body.world.on('worldbounds', (body) => {
      if (body.gameObject === this) {
        this.destroy(true)
      }
    })
  }
}
