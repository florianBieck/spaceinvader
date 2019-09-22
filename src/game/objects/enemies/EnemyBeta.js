import Enemy from "../Enemy";

export default class EnemyAlpha extends Enemy {
  constructor (scene, blockwidth, blockheight, x, y) {
    super(scene, blockwidth, blockheight, x, y, 'enemyBeta')

    this.setData('health', 4)
    this.setData('scoreOnHit', 9)
    this.setData('scoreOnKill', 200)
  }
}
