import Enemy from "../Enemy";

export default class EnemyAlpha extends Enemy {
  constructor (scene, blockwidth, blockheight, x, y) {
    super(scene, blockwidth, blockheight, x, y, 'enemyGamma')

    this.setData('health', 3)
    this.setData('scoreOnHit', 7)
    this.setData('scoreOnKill', 100)
  }
}
