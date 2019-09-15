import Phaser from 'phaser'

export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor (scene, width) {
    const size = 96
    super(scene, Math.floor(Math.random() * (width - size)) + (size / 2), size / 2, 'enemy')
    this.size = size
    this.scene = scene

    this.setData('speed', this.sizeRocket)
    this.setData('health', 3)
    this.setData('scoreOnHit', 3)
    this.setData('scoreOnKill', 50)

    scene.add.existing(this, false)

    this.setDisplaySize(size, size)
    this.height = size
    this.width = size
    this.setAngle(180)
  }

  move () {
    this.body.setAccelerationY(50)
    this.body.setVelocityY(Math.floor(Math.random() * 200) + 50)
  }
}
