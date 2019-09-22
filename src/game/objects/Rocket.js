import Phaser from 'phaser'

export default class Rocket extends Phaser.GameObjects.Sprite {
  constructor (scene, width, height, blockwidth, blockheight) {
    super(scene, width / 2, height - (blockheight), 'rocket')
    this.scene = scene

    this.setData('speed', 50)
    this.setData('blockwidth', 1)
    this.setData('blockheight', 1)

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setDisplaySize(blockwidth, blockheight)
    this.height = blockheight
    this.width = blockwidth
    this.body.setSize(this.width, this.height)
    this.setAngle(-90)
    this.body.setCollideWorldBounds(true, 0, 0)
  }

  moveLeft () {
    if (this.body.velocity.x < 0) {
      this.body.setAccelerationX(this.body.velocity.x - this.data.get('speed'))
    } else if (this.body.velocity.x === 0) {
      this.body.setVelocityX(-200)
    }
  }

  moveRight () {
    if (this.body.velocity.x > 0) {
      this.body.setAccelerationX(this.body.velocity.x + this.data.get('speed'))
    } else if (this.body.velocity.x === 0) {
      this.body.setVelocityX(200)
    }
  }

  moveStop () {
    this.body.setVelocityX(0)
    this.body.setAccelerationX(0)
  }
}
