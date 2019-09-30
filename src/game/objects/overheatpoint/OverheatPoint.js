import Phaser from 'phaser'

export default class OverheatPoint extends Phaser.GameObjects.Image {
  constructor (scene, x, y, size) {
    super(scene, x, y, 'overheatpointEmpty')
    this.size = size
    this.scene = scene

    scene.add.existing(this, false)

    this.setDisplaySize(size, size)
  }
}
