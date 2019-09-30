import Phaser from 'phaser'

export default class BonusHealth extends Phaser.GameObjects.Image {
  constructor (scene, x, size) {
    super(scene, x, size, 'bonusHealth')
    this.size = size
    this.scene = scene

    scene.add.existing(this, false)

    this.setDisplaySize(this.size, this.size)
    this.setSize(this.size, this.size)
  }

  startMovement () {
    this.body.setVelocityY(300)
    this.body.setCollideWorldBounds(true)
    this.body.onWorldBounds = true
    this.body.world.on('worldbounds', (body) => {
      if (body.gameObject === this) {
        this.destroy(true)
      }
    })
  }
}
