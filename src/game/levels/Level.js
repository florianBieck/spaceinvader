export default class Level {
  constructor (fieldwidth, fieldheight, alphaSpawns, move, fieldSpawns) {
    this.fieldwidth = fieldwidth
    this.fieldheight = fieldheight
    this.alphaSpawns = alphaSpawns
    this.move = move
    this.fieldSpawns = fieldSpawns
  }

  getSpawnSum () {
    return this.fieldSpawns.getSpawnSum()
  }
}
