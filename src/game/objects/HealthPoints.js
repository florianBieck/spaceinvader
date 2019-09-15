import Phaser from 'phaser'
import HealthPoint from './HealthPoint'

export default class HealthPoints extends Phaser.GameObjects.Group {
  constructor (scene, width, height, maxHealth) {
    const size = 32
    super(scene)
    this.size = size
    this.scene = scene

    scene.add.existing(this, false)

    const y = height - (size / 2)
    for (let i = 0; i < maxHealth; i++) {
      const x = width - (size * maxHealth) + (i * size)
      const healthPoint = new HealthPoint(scene, x, y)
      this.add(healthPoint)
    }
  }

  retexture (health) {
    for (let i = 0; i < this.children.size; i++) {
      this.children.entries[i].setVisible(i < health)
    }
  }
}
