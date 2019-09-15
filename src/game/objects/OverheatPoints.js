import Phaser from 'phaser'
import OverheatPoint from './OverheatPoint'

export default class OverheatPoints extends Phaser.GameObjects.Group {
  constructor (scene, offsetX, offsetY, overheatMax) {
    const size = 24
    super(scene)
    this.size = size
    this.scene = scene

    scene.add.existing(this, false)

    for (let i = 0; i < overheatMax; i++) {
      const x = offsetX + (i * this.size)
      const y = offsetY - (this.size / 2)
      const overheatPoint = new OverheatPoint(scene, x, y, this.size)
      this.add(overheatPoint)
    }
  }

  retexture (overheat) {
    for (let i = 0; i < this.children.size; i++) {
      this.children.entries[i].setTexture(i < overheat ? 'fire' : 'fireEmpty')
    }
  }
}
