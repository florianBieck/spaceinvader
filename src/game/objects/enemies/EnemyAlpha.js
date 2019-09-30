import Enemy from '../Enemy'
import MissleAlpha from './MissleAlpha'

export default class EnemyAlpha extends Enemy {
  constructor (scene, blockwidth, blockheight, x, y, misslesGroup) {
    super(scene, blockwidth, blockheight, x, y, 'enemyAlpha')

    this.setData('health', 2)
    this.setData('scoreOnHit', 15)
    this.setData('scoreOnKill', 250)

    this.setAngle(-22)

    this.missles = misslesGroup
  }

  startMovement () {
    this.body.setVelocityX(100)
    this.body.setAccelerationX(30)
    this.body.setCollideWorldBounds(true, 1.1, 0)
  }

  moveX () {
    // Do nothing
  }

  moveY () {
    // Do nothing
  }

  shoot () {
    if (Math.floor(Math.random() * 100) === 1) {
      const missle = new MissleAlpha(this.scene, this.body, this.width)
      this.missles.add(missle)
      missle.move()
      this.scene.sound.play('shot', { volume: 0.8 })
    }
  }
}
