import Enemy from '../Enemy'
import MissleGamma from './MissleGamma'

export default class EnemyGamma extends Enemy {
  constructor (scene, blockwidth, blockheight, x, y, misslesGroup) {
    super(scene, blockwidth, blockheight, x, y, 'enemyGamma')

    this.setData('health', 3)
    this.setData('scoreOnHit', 7)
    this.setData('scoreOnKill', 100)

    this.missles = misslesGroup
  }

  shoot () {
    if (Math.floor(Math.random() * 500) === 1) {
      const missle = new MissleGamma(this.scene, this.body, this.width)
      this.missles.add(missle)
      missle.move()
      this.scene.sound.play('shot', { volume: 0.6 })
    }
  }
}
