import Phaser from 'phaser'

export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor (scene, blockwidth, blockheight, x, y, texture) {
    super(scene, x * blockwidth + (blockwidth / 2), y * blockheight + (blockheight / 2), texture)
    this.scene = scene

    scene.add.existing(this, false)

    this.setData('facing', 0) // right

    this.setDisplaySize(blockwidth, blockheight)
    this.height = blockheight
    this.width = blockwidth
  }

  moveX () {
    if (this.data.get('facing') === 0) {
      this.body.position.x += this.width
    } else {
      this.body.position.x -= this.width
    }
  }

  moveY () {
    this.body.position.y += this.height
  }

  shoot () {

  }
}
