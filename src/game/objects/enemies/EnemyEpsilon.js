import Enemy from '../Enemy'

export default class EnemyEpsilon extends Enemy {
  constructor (scene, blockwidth, blockheight, x, y, misslesGroup) {
    super(scene, blockwidth, blockheight, x, y, 'enemyEpsilon')

    this.setData('health', 1)
    this.setData('scoreOnHit', 3)
    this.setData('scoreOnKill', 50)

    this.missles = misslesGroup
  }

  shoot () {
    // Do nothing
  }
}
