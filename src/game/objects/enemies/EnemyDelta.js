import Enemy from '../Enemy'
import MissleDelta from './MissleDelta'

export default class EnemyDelta extends Enemy {
  constructor (scene, blockwidth, blockheight, x, y, misslesGroup) {
    super(scene, blockwidth, blockheight, x, y, 'enemyDelta')

    this.setData('health', 2)
    this.setData('scoreOnHit', 5)
    this.setData('scoreOnKill', 75)

    this.missles = misslesGroup
  }

  shoot () {
    if (Math.floor(Math.random() * 1000) === 1) {
      const missle = new MissleDelta(this.scene, this.body, this.width)
      this.missles.add(missle)
      missle.move()
      this.scene.sound.play('shot', { volume: 0.6 })
    }
  }
}
