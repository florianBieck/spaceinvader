import Phaser from 'phaser'

export default class MissleGamma extends Phaser.GameObjects.Sprite {
  constructor (scene, enemyBody, blockwidth) {
    const size = 32
    super(scene, enemyBody.position.x + (blockwidth / 2), enemyBody.position.y, 'missleGamma')
    this.size = size
    this.scene = scene

    this.setData('speed', 300)
    this.setData('damage', 1)

    scene.add.existing(this, false)

    this.setDisplaySize(this.size, this.size)
    this.width = size
    this.height = size
    this.setAngle(-225)
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
