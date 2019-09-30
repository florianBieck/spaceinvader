import Phaser from 'phaser'

export default class MissleAlpha extends Phaser.GameObjects.Sprite {
  constructor (scene, enemyBody, blockwidth) {
    const size = 48
    super(scene, enemyBody.position.x + (blockwidth / 2), enemyBody.position.y, 'missleAlpha')
    this.size = size
    this.scene = scene

    this.setData('speed', 500)
    this.setData('damage', 2)

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
