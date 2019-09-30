export default class Level {
  constructor (fieldwidth, fieldheight, alphaSpawns, moveX, moveY, fieldSpawns) {
    this.fieldwidth = fieldwidth
    this.fieldheight = fieldheight
    this.alphaSpawns = alphaSpawns
    this.moveX = moveX
    this.moveY = moveY
    this.fieldSpawns = fieldSpawns
  }

  getSpawnSum () {
    return this.fieldSpawns.getSpawnSum()
  }
}
