import Enemy from "../Enemy";

export default class EnemyAlpha extends Enemy {
  constructor (scene, blockwidth, blockheight, x, y) {
    super(scene, blockwidth, blockheight, x, y, 'enemyDelta')

    this.setData('health', 2)
    this.setData('scoreOnHit', 5)
    this.setData('scoreOnKill', 75)
  }
}
