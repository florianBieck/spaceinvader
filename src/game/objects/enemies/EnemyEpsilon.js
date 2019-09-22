import Enemy from "../Enemy";

export default class EnemyAlpha extends Enemy {
  constructor (scene, blockwidth, blockheight, x, y) {
    super(scene, blockwidth, blockheight, x, y, 'enemyEpsilon')

    this.setData('health', 1)
    this.setData('scoreOnHit', 3)
    this.setData('scoreOnKill', 50)
  }
}
