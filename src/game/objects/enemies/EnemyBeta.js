import Enemy from '../Enemy'
import MissleBeta from './MissleBeta'

export default class EnemyBeta extends Enemy {
  constructor (scene, blockwidth, blockheight, x, y, misslesGroup) {
    super(scene, blockwidth, blockheight, x, y, 'enemyBeta')

    this.setData('health', 4)
    this.setData('scoreOnHit', 9)
    this.setData('scoreOnKill', 200)

    this.missles = misslesGroup
  }

  shoot () {
    if (Math.floor(Math.random() * 250) === 1) {
      const missle = new MissleBeta(this.scene, this.body, this.width)
      this.missles.add(missle)
      missle.move()
      this.scene.sound.play('shot', { volume: 0.6 })
    }
  }
}
