import Phaser from 'phaser'

export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor (scene, blockwidth, blockheight, x, y, texture) {
    super(scene, x * blockwidth + (blockwidth / 2), y * blockheight + (blockwidth / 2), texture)
    this.scene = scene

    scene.add.existing(this, false)

    this.setDisplaySize(blockwidth, blockheight)
    this.height = blockheight
    this.width = blockwidth
    this.setAngle(180)
  }

  move () {
    // this.body.setAccelerationY(50)
    // this.body.setVelocityY(Math.floor(Math.random() * 200) + 50)
    this.body.position.y += this.height
  }
}
