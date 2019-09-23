import { Scene, Input } from 'phaser'
import backgroundImage from '../../assets/logo.svg'
import missleImage from '../../assets/icons8-missile.svg'
import enemyAlphaImage from '../../assets/enemyAlpha.svg'
import enemyBetaImage from '../../assets/enemyBeta.svg'
import enemyGammaImage from '../../assets/enemyGamma.svg'
import enemyDeltaImage from '../../assets/enemyDelta.svg'
import enemyEpsilonImage from '../../assets/enemyEpsilon.svg'
import explodeMissleImage from '../../assets/icons8-explosion.svg'
import heartImage from '../../assets/icons8-heart.svg'
import heartEmptyImage from '../../assets/icons8-heart-empty.svg'
import fireImage from '../../assets/icons8-fire.svg'
import fireEmptyImage from '../../assets/icons8-fire-empty.svg'
import rocketImage from '../../assets/icons8-space-shuttle.svg'
import Rocket from '../objects/Rocket'
import Missle from '../objects/Missle'
import Background from '../objects/Background'
import ExplosionMissle from '../objects/ExplosionMissle'
import OverheatPoints from '../objects/OverheatPoints'
import HealthPoints from '../objects/HealthPoints'
import EnemyAlpha from "../objects/enemies/EnemyAlpha";
import EnemyBeta from "../objects/enemies/EnemyBeta";
import EnemyGamma from "../objects/enemies/EnemyGamma";
import EnemyDelta from "../objects/enemies/EnemyDelta";
import EnemyEpsilon from "../objects/enemies/EnemyEpsilon";

export default class BasicScene extends Scene {
  constructor () {
    super({ key: 'BasicScene' })
  }

  preload () {
    this.load.image('background', backgroundImage)
    this.load.image('rocket', rocketImage)
    this.load.image('missle', missleImage)
    this.load.image('enemyAlpha', enemyAlphaImage)
    this.load.image('enemyBeta', enemyBetaImage)
    this.load.image('enemyGamma', enemyGammaImage)
    this.load.image('enemyDelta', enemyDeltaImage)
    this.load.image('enemyEpsilon', enemyEpsilonImage)
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
    this.fieldwidth = 12
    this.fieldheight = 12
    this.enemywidth = this.fieldwidth - 1
    this.enemyheight = 4
    this.blockwidth = this.width / this.fieldwidth
    this.blockheight = this.height / this.fieldheight

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

    this.rocket = new Rocket(this, this.width, this.height, this.blockwidth, this.blockheight)

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
      const missle = new Missle(this, this.rocket.body, this.blockwidth)
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
    for (let x=1; x<this.enemywidth; x++){
      for (let y=1; y<this.enemyheight; y++){
        var enemy = null
        switch (Math.floor(Math.random() * 2)) {
          case 1: enemy = new EnemyBeta(this, this.blockwidth, this.blockheight, x, y); break;
          case 2: enemy = new EnemyGamma(this, this.blockwidth, this.blockheight, x, y); break;
          case 3: enemy = new EnemyDelta(this, this.blockwidth, this.blockheight, x, y); break;
          default: enemy = new EnemyEpsilon(this, this.blockwidth, this.blockheight, x, y); break;
        }
        this.enemies.add(enemy)
        // enemy.move()
      }
    }
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

  handleInputs () {
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
  }

  update (time, delta) {
    this.handleInputs()

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
      }
    })

    if (Math.floor(Math.random() * 500) < 2) {
      // this.spawnEnemy()
      this.enemies.getChildren().forEach(enemy => {
        enemy.move()
      })
    }

    if (Math.floor(Math.random() * 500) < 1) {
      var enemy = new EnemyAlpha(this, this.blockwidth, this.blockheight, 0, 0)
      this.enemies.add(enemy)
      enemy.move()
    }

    this.overheatingPoints.retexture(this.overheat)
    this.hearts.retexture(this.health)

    if (this.health <= 0) {
      this.gameOver()
    }
  }
}
