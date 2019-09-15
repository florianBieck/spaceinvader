import Phaser from 'phaser'

export default class ExplosionMissle extends Phaser.GameObjects.Image {
  constructor (scene, enemy) {
    const size = 48
    super(scene, enemy.x, enemy.y + (size / 2), 'explodeMissle')
    this.scene = scene

    scene.add.existing(this, false)

    this.setDisplaySize(size, size)

    // eslint-disable-next-line no-return-assign
    setTimeout(() => this.destroy(true), 200)
  }
}
