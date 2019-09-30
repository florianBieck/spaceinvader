import Level from './Level'
import FieldSpawns from './FieldSpawns'

export default class Levels {
  constructor () {
    this.levels = [
      new Level(2, 2, 0, 200, 150, new FieldSpawns(0, 0, 0, 1)), // 1
      new Level(3, 3, 0, 200, 150, new FieldSpawns(0, 0, 0, 1)), // 2
      new Level(3, 3, 0, 200, 125, new FieldSpawns(0, 0, 1, 10)), // 3
      new Level(4, 4, 0, 200, 125, new FieldSpawns(0, 0, 2, 10)), // 4
      new Level(4, 4, 0, 150, 125, new FieldSpawns(0, 0, 5, 10)), // 5
      new Level(4, 4, 0, 150, 125, new FieldSpawns(0, 0, 5, 7)), // 6
      new Level(4, 4, 0, 150, 125, new FieldSpawns(0, 1, 7, 5)), // 7
      new Level(4, 4, 0, 150, 125, new FieldSpawns(0, 2, 10, 3)), // 8
      new Level(4, 4, 0, 150, 125, new FieldSpawns(0, 5, 10, 1)), // 9
      new Level(5, 5, 750, 125, 100, new FieldSpawns(0, 7, 7, 1)), // 10
      new Level(4, 4, 1000, 125, 125, new FieldSpawns(0, 5, 10, 1)), // 11
      new Level(4, 4, 750, 125, 125, new FieldSpawns(0, 7, 5, 1)), // 12
      new Level(4, 4, 750, 125, 125, new FieldSpawns(0, 10, 2, 1)), // 13
      new Level(5, 5, 750, 125, 125, new FieldSpawns(1, 10, 2, 1)), // 14
      new Level(5, 5, 500, 100, 100, new FieldSpawns(2, 10, 1, 1)), // 15
      new Level(5, 5, 500, 100, 100, new FieldSpawns(5, 7, 1, 1)), // 16
      new Level(5, 5, 500, 100, 100, new FieldSpawns(7, 5, 1, 0)), // 17
      new Level(5, 5, 500, 100, 100, new FieldSpawns(10, 2, 1, 0)), // 18
      new Level(3, 3, 250, 75, 50, new FieldSpawns(10, 2, 0, 0)), // 19
      new Level(6, 6, 350, 75, 75, new FieldSpawns(10, 2, 1, 0)), // 20
      new Level(6, 6, 500, 75, 75, new FieldSpawns(10, 2, 0, 0)), // 21
      new Level(6, 6, 250, 75, 75, new FieldSpawns(10, 2, 0, 0)), // 22
      new Level(6, 6, 250, 75, 75, new FieldSpawns(10, 1, 0, 0)), // 23
      new Level(5, 5, 250, 75, 75, new FieldSpawns(1, 0, 0, 0)), // 24
      new Level(8, 8, 350, 50, 50, new FieldSpawns(1, 6, 0, 0)), // 25
      new Level(6, 6, 200, 50, 50, new FieldSpawns(1, 0, 0, 0)), // 26
      new Level(5, 5, 100, 50, 50, new FieldSpawns(1, 0, 0, 0)), // 27
      new Level(7, 7, 100, 40, 50, new FieldSpawns(1, 0, 0, 0)), // 28
      new Level(8, 8, 75, 40, 50, new FieldSpawns(1, 0, 0, 0)), // 29
      new Level(9, 9, 50, 25, 25, new FieldSpawns(1, 0, 0, 0)) // 30
    ]
  }
}
