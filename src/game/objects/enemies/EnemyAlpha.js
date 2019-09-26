import Enemy from '../Enemy'

export default class EnemyAlpha extends Enemy {
  constructor (scene, blockwidth, blockheight, x, y) {
    super(scene, blockwidth, blockheight, x, y, 'enemyAlpha')

    this.setData('health', 2)
    this.setData('scoreOnHit', 15)
    this.setData('scoreOnKill', 250)

    this.setAngle(-22)

    this.scene.time.addEvent({ delay: 100, callback: this.scoreOne, callbackScope: this, loop: true })
  }

  move () {
    this.body.setVelocityX(100)
    this.body.setAccelerationX(30)
  }
}
