import { Scene, Input } from 'phaser'
import backgroundImage from '../../assets/logo.svg'
import missleImage from '../../assets/icons8-missile.svg'
import enemyImage from '../../assets/icons8-fighter.svg'
import explodeMissleImage from '../../assets/icons8-explosion.svg'
import heartImage from '../../assets/icons8-heart.svg'
import heartEmptyImage from '../../assets/icons8-heart-empty.svg'
import fireImage from '../../assets/icons8-fire.svg'
import fireEmptyImage from '../../assets/icons8-fire-empty.svg'
import rocketImage from '../../assets/icons8-space-shuttle.svg'
import Rocket from '../objects/Rocket'
import Missle from '../objects/Missle'
import Enemy from '../objects/Enemy'
import HealthPoint from '../objects/HealthPoint'
import OverheatPoint from '../objects/OverheatPoint'
import Background from '../objects/Background'
import ExplosionMissle from '../objects/ExplosionMissle'
import OverheatPoints from '../objects/OverheatPoints'
import HealthPoints from '../objects/HealthPoints'

export default class BasicScene extends Scene {
  constructor () {
    super({ key: 'BasicScene' })
  }

  preload () {
    this.load.image('background', backgroundImage)
    this.load.image('rocket', rocketImage)
    this.load.image('missle', missleImage)
    this.load.image('enemy', enemyImage)
    this.load.image('explodeMissle', explodeMissleImage)
    this.load.image('heart', heartImage)
    this.load.image('heartEmpty', heartEmptyImage)
    this.load.image('fire', fireImage)
    this.load.image('fireEmpty', fireEmptyImage)
  }

  create () {
    this.border = 12
    this.width = this.scale.width
    this.height = this.scale.height
    this.sizeHeart = 32

    this.maxHealth = 5
    this.health = this.maxHealth

    this.overheatMax = 10
    this.overheat = 0

    this.score = 0
    this.level = 0

    this.left = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT)
    this.right = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT)
    this.space = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE)
    this.esc = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.ESC)
    this.ctrl = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.CTRL)

    this.background = new Background(this, this.width, this.height)
    this.add.existing(this.background)

    this.rocket = new Rocket(this, this.width, this.height)

    this.scoreText = this.add.text(this.border, this.border, 'SCORE: 0')
    this.scoringTexts = []

    this.levelText = this.add.text(this.width, this.border, 'LEVEL: 0')
    this.increaseLevel(1)

    this.hearts = new HealthPoints(this, this.width, this.height, this.maxHealth)

    this.overheatingPoints = new OverheatPoints(this, this.border, this.height, this.overheatMax)

    this.missles = this.physics.add.group()
    this.enemies = this.physics.add.group()
    const collideMissleEnemy = this.physics.add.collider(this.missles, this.enemies, this.hitMissleEnemy, null, this)
    collideMissleEnemy.overlapOnly = true
    this.spawnEnemy()

    this.time.addEvent({ delay: 1000, callback: this.moveEnemies, callbackScope: this, loop: true })
    this.time.addEvent({ delay: 100, callback: this.scoreOne, callbackScope: this, loop: true })
  }

  scoreOne () {
    this.score++
    this.scoreText.setText('SCORE: ' + this.score)
  }

  increaseLevel (level) {
    this.level += level
    this.levelText.setText('LEVEL: ' + this.level)
    this.levelText.setX(this.width - this.border * this.levelText.text.length)
  }

  scoring (score) {
    this.score += score
    this.scoreText.setText('SCORE: ' + this.score)
    const scoringText = this.add.text(this.border * 2, this.border * 2, '+' + score)
    this.scoringTexts.push(scoringText)
    // eslint-disable-next-line no-return-assign
    setTimeout(() => scoringText.destroy(true), 1000)
  }

  shootMissle () {
    if (!this.cooldownMissle && this.overheat <= this.overheatMax) {
      const missle = new Missle(this, this.rocket.body, this.rocket.size)
      this.missles.add(missle)
      missle.move()
      this.cooldownMissle = true
      this.overheat++
      // eslint-disable-next-line no-return-assign
      setTimeout(() => this.cooldownMissle = false, 200)
      setTimeout(() => {
        if (this.overheat > 0) {
          this.overheat--
        }
      }, this.overheat * 500)
    }
  }

  hitMissleEnemy (missle, enemy) {
    missle.destroy(true)
    this.scoring(enemy.data.get('scoreOnHit'))

    new ExplosionMissle(this, enemy)

    enemy.setData('health', enemy.data.get('health') - 1)
    if (enemy.data.get('health') <= 0) {
      this.scoring(enemy.data.get('scoreOnKill'))
      enemy.destroy(true)
    }
  }

  spawnEnemy () {
    const enemy = new Enemy(this, this.width)
    this.enemies.add(enemy)
    enemy.move()
  }

  isPaused () {
    return this.scene.isPaused()
  }

  resume () {
    // this.scene.resume()
    this.esc.reset()
  }

  gameOver () {
    this.physics.pause()
    this.sys.pause()
    this.missles.getChildren().forEach(missle => missle.destroy(true))
  }

  update (time, delta) {
    if (this.left.isDown) {
      this.rocket.moveLeft()
    }
    if (this.right.isDown) {
      this.rocket.moveRight()
    }
    if (!this.right.isDown && !this.left.isDown) {
      this.rocket.moveStop()
    }
    if (this.space.isDown) {
      this.shootMissle()
    }
    if (this.esc.isDown) {
      this.scene.pause('BasicScene')
      this.esc.reset()
    }
    if (this.ctrl.isDown) {
      this.ctrl.reset()
    }

    this.scoringTexts.forEach(scoringText => {
      scoringText.setY(scoringText.y + 2)
    })

    this.enemies.getChildren().forEach(enemy => {
      if (enemy.y >= this.height) {
        this.health = this.health - 1
        const tint = this.rocket.tint
        this.rocket.setTint(0xff0000)
        // eslint-disable-next-line no-return-assign
        setTimeout(() => this.rocket.setTint(tint), 100)
        enemy.destroy(true)
        this.spawnEnemy()
      }
    })

    if (Math.floor(Math.random() * 4000) < 2) {
      this.spawnEnemy()
    }

    if (this.health <= 0) {
      this.gameOver()
    }

    this.overheatingPoints.retexture(this.overheat)
    this.hearts.retexture(this.health)
  }
}
