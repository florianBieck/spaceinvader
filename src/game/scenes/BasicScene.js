import { Scene, Input } from 'phaser'
import backgroundImage from '../../assets/background.svg'
import missleImage from '../../assets/missle.svg'
import bonusHealthImage from '../../assets/bonusHealth.svg'
import enemyAlphaImage from '../../assets/enemyAlpha.svg'
import enemyBetaImage from '../../assets/enemyBeta.svg'
import enemyGammaImage from '../../assets/enemyGamma.svg'
import enemyDeltaImage from '../../assets/enemyDelta.svg'
import enemyEpsilonImage from '../../assets/enemyEpsilon.svg'
import missleAlphaImage from '../../assets/missleAlpha.svg'
import missleBetaImage from '../../assets/missleBeta.svg'
import missleGammaImage from '../../assets/missleGamma.svg'
import missleDeltaImage from '../../assets/missleDelta.svg'
import explodeMissleImage from '../../assets/explodeMissle.svg'
import healthpointImage from '../../assets/healthpoint.svg'
import healthpointEmptyImage from '../../assets/healthpointEmpty.svg'
import overheatpointImage from '../../assets/overheatpoint.svg'
import overheatpointEmptyImage from '../../assets/overheatpointEmpty.svg'
import rocketImage from '../../assets/rocket.svg'
import backgroundAudio from '../../assets/audio/Background.wav'
import bonusHealthAudio from '../../assets/audio/BonusHealth.wav'
import enemyDeathAudio from '../../assets/audio/EnemyDeath.wav'
import enemyHitAudio from '../../assets/audio/EnemyHit.wav'
import enemyMoveAudio from '../../assets/audio/EnemyMove.wav'
import levelUpAudio from '../../assets/audio/LevelUp.wav'
import loseAudio from '../../assets/audio/Lose.wav'
import playerHitAudio from '../../assets/audio/PlayerHit.wav'
import shotAudio from '../../assets/audio/Shot.wav'
import victoryAudio from '../../assets/audio/Victory.wav'
import Rocket from '../objects/Rocket'
import Missle from '../objects/Missle'
import Background from '../objects/Background'
import ExplosionMissle from '../objects/ExplosionMissle'
import OverheatPoints from '../objects/overheatpoint/OverheatPoints'
import HealthPoints from '../objects/healthpoint/HealthPoints'
import EnemyAlpha from '../objects/enemies/EnemyAlpha'
import EnemyBeta from '../objects/enemies/EnemyBeta'
import EnemyGamma from '../objects/enemies/EnemyGamma'
import EnemyDelta from '../objects/enemies/EnemyDelta'
import EnemyEpsilon from '../objects/enemies/EnemyEpsilon'
import Levels from '../levels/Levels'
import BonusHealth from '../objects/bonus/BonusHealth'

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
    this.load.image('missleAlpha', missleAlphaImage)
    this.load.image('missleBeta', missleBetaImage)
    this.load.image('missleGamma', missleGammaImage)
    this.load.image('missleDelta', missleDeltaImage)
    this.load.image('explodeMissle', explodeMissleImage)
    this.load.image('heart', healthpointImage)
    this.load.image('heartEmpty', healthpointEmptyImage)
    this.load.image('overheatpoint', overheatpointImage)
    this.load.image('overheatpointEmpty', overheatpointEmptyImage)
    this.load.image('bonusHealth', bonusHealthImage)

    this.load.audio('background', backgroundAudio)
    this.load.audio('bonusHealth', bonusHealthAudio)
    this.load.audio('enemyDeath', enemyDeathAudio)
    this.load.audio('enemyHit', enemyHitAudio)
    this.load.audio('enemyMove', enemyMoveAudio)
    this.load.audio('levelUp', levelUpAudio)
    this.load.audio('lose', loseAudio)
    this.load.audio('playerHit', playerHitAudio)
    this.load.audio('shot', shotAudio)
    this.load.audio('victory', victoryAudio)
  }

  create () {
    this.border = 12
    this.width = this.scale.width
    this.height = this.scale.height
    this.fieldwidth = 12
    this.fieldheight = 12
    this.blockwidth = this.width / this.fieldwidth
    this.blockheight = this.height / this.fieldheight

    this.maxHealth = 5
    this.health = this.maxHealth

    this.overheatMax = 10
    this.overheat = 0

    this.score = 0

    this.levels = new Levels()
    this.level = -1

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

    this.hearts = new HealthPoints(this, this.width, this.height, this.maxHealth)

    this.overheatingPoints = new OverheatPoints(this, this.border, this.height, this.overheatMax)

    this.missles = this.physics.add.group()
    this.enemies = this.physics.add.group()
    const collideMissleEnemy = this.physics.add.collider(this.missles, this.enemies, this.hitMissleEnemy, null, this)
    collideMissleEnemy.overlapOnly = true

    this.misslesByEnemy = this.physics.add.group()
    const collideMissleByEnemyRocket = this.physics.add.collider(this.misslesByEnemy, this.rocket, this.hitMissleRocket, null, this)
    collideMissleByEnemyRocket.overlapOnly = true

    this.bonusHealths = this.physics.add.group()
    const collideBonusHealthRocket = this.physics.add.collider(this.bonusHealths, this.rocket, this.hitBonusHealthRocket, null, this)
    collideBonusHealthRocket.overlapOnly = true

    this.levelText = this.add.text(this.width, this.border, 'LEVEL')
    this.increaseLevel(1)

    this.gametimer = 0
    this.gametimerText = this.add.text(this.width / 2 - ((this.gametimer + '').length * 8), this.border, 'TIME')
    this.leveltimer = 0
    this.time.addEvent({ delay: 1000, callback: this.timing, callbackScope: this, loop: true })

    this.sound.play('background', { loop: true, volume: 0.5 })
    this.events.on('pause', () => {
      this.sound.pauseAll()
    })
    this.events.on('resume', () => {
      this.sound.resumeAll()
    })
    /* this.events.on('destroy', () => {
      this.sound.destroy()
    }) */
  }

  timing () {
    this.gametimer++
    this.leveltimer++
    const mg = Math.floor(this.gametimer / 60)
    const ml = Math.floor(this.leveltimer / 60)
    const sg = this.gametimer % 60
    const sl = this.leveltimer % 60
    const tg = ((mg + '').length > 1 ? mg : '0' + mg) + ':' + ((sg + '').length > 1 ? sg : '0' + sg)
    const tl = ((ml + '').length > 1 ? ml : '0' + ml) + ':' + ((sl + '').length > 1 ? sl : '0' + sl)
    const out = 'IN GAME: ' + tg + ' / IN LEVEL: ' + tl
    this.gametimerText.setX(this.width / 2 - (out.length * 4))
    this.gametimerText.setText(out)
  }

  increaseLevel (level) {
    this.level += level
    if (this.isMaxLevel()) {
      this.sound.play('victory')
      this.gameOver()
    } else {
      this.sound.play('levelUp')
      this.levelText.setText('LEVEL: ' + this.level)
      this.levelText.setX(this.width - this.border * this.levelText.text.length)
      this.spawnEnemy(this.levels.levels[this.level])
      this.leveltimer = 0
      if (this.level > 3 && Math.floor(Math.random() * 5) === 1) {
        this.spawnBonusHealth()
      }
    }
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
      this.sound.play('shot', { volume: 0.4 })
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

    this.sound.play('enemyHit', { volume: 0.4 })

    new ExplosionMissle(this, enemy)

    enemy.setData('health', enemy.data.get('health') - 1)
    if (enemy.data.get('health') <= 0) {
      const factor = 30
      const exp = this.leveltimer > factor ? factor : this.leveltimer
      const timeMalus = Math.pow(enemy.data.get('scoreOnKill') / 4 * 3, Math.floor(exp / factor))
      const score = Math.round(enemy.data.get('scoreOnKill') - timeMalus)
      this.scoring(score)
      enemy.destroy(true)
      this.sound.play('enemyDeath', { volume: 0.4 })
    }
  }

  hitMissleRocket (rocket, missle) {
    this.health -= missle.data.get('damage')
    missle.destroy(true)

    this.sound.play('playerHit', { volume: 0.4 })

    new ExplosionMissle(this, rocket.body.position)

    this.tint(this.rocket)

    this.health = this.health < 0 ? 0 : this.health
    this.hearts.retexture(this.health)

    if (this.health <= 0) {
      this.gameOver()
    }
  }

  hitBonusHealthRocket (rocket, bonusHealth) {
    bonusHealth.destroy(true)

    this.sound.play('bonusHealth')

    if (this.health < this.maxHealth) {
      this.health++
      this.hearts.retexture(this.health)
    }
  }

  spawnEnemy (level) {
    const spawnSum = level.getSpawnSum()
    const offsetX = Math.ceil((this.fieldwidth - level.fieldwidth) / 2)
    const offsetY = 0
    for (let x = 0; x < level.fieldwidth; x++) {
      for (let y = 0; y < level.fieldheight; y++) {
        var enemy = null
        var spawn = Math.floor(Math.random() * spawnSum)
        const spawns = level.fieldSpawns.getSpawns()
        let i = 0
        var spawnAdd = 0
        while (spawn >= spawns[i] + spawnAdd) {
          i++
          spawnAdd += spawns[i]
        }
        switch (i) {
          case 0: enemy = new EnemyBeta(this, this.blockwidth, this.blockheight, x + offsetX, y + offsetY, this.misslesByEnemy); break
          case 1: enemy = new EnemyGamma(this, this.blockwidth, this.blockheight, x + offsetX, y + offsetY, this.misslesByEnemy); break
          case 2: enemy = new EnemyDelta(this, this.blockwidth, this.blockheight, x + offsetX, y + offsetY, this.misslesByEnemy); break
          case 3: enemy = new EnemyEpsilon(this, this.blockwidth, this.blockheight, x + offsetX, y + offsetY, this.misslesByEnemy); break
        }
        this.enemies.add(enemy)
      }
    }
  }

  tint (object) {
    object.setTint(0xff0000)
    this.time.addEvent({ delay: 100, callback: object.clearTint, callbackScope: object, loop: false })
  }

  isPaused () {
    return this.scene.isPaused()
  }

  isMaxLevel () {
    return this.level === this.levels.levels.length
  }

  isBeforeMaxLevel () {
    return this.level === this.levels.levels.length - 1
  }

  resume () {
    this.scene.resume()
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
  }

  moveEnemiesX () {
    this.enemies.getChildren().forEach(enemy => {
      if ((enemy.data.get('facing') === 0 && enemy.body.position.x + enemy.width >= this.width) ||
          (enemy.data.get('facing') === 1 && enemy.body.position.x - enemy.width <= 0)) {
        enemy.data.set('facing', enemy.data.get('facing') === 0 ? 1 : 0)
      }
      enemy.moveX()
      this.sound.play('enemyMove', { volume: 0.1 })
    })
  }

  moveEnemiesY () {
    this.enemies.getChildren().forEach(enemy => {
      enemy.moveY()
      this.sound.play('enemyMove', { volume: 0.1 })
    })
  }

  spawnAlpha () {
    var enemy = new EnemyAlpha(this, this.blockwidth, this.blockheight, 0, 0, this.misslesByEnemy)
    this.enemies.add(enemy)
    enemy.startMovement()
  }

  spawnBonusHealth () {
    const bonusHealthSize = 32
    var bonus = new BonusHealth(this, Math.floor(Math.random() * (this.width - bonusHealthSize)), bonusHealthSize)
    this.bonusHealths.add(bonus)
    bonus.startMovement()
  }

  update (time, delta) {
    this.handleInputs()

    this.scoringTexts.forEach(scoringText => {
      scoringText.setY(scoringText.y + 2)
    })

    this.enemies.getChildren().forEach(enemy => {
      if (enemy.y >= this.height) {
        this.health = this.health - 1
        this.tint(this.rocket)
        enemy.destroy(true)
      }
    })

    if (Math.floor(Math.random() * this.levels.levels[this.level].moveX) === 1) {
      this.moveEnemiesX()
    }

    if (Math.floor(Math.random() * this.levels.levels[this.level].moveY) === 1) {
      this.moveEnemiesY()
    }

    if (Math.floor(Math.random() * this.levels.levels[this.level].alphaSpawns) === 1) {
      this.spawnAlpha()
    }

    if (Math.floor(Math.random() * this.levels.levels[this.level].alphaSpawns) === 1) {

    }

    this.enemies.getChildren().forEach(enemy => {
      enemy.shoot()
    })

    if (this.enemies.getChildren().length === 0 && !this.isMaxLevel()) {
      this.increaseLevel(1)
    }

    this.overheatingPoints.retexture(this.overheat)
    this.hearts.retexture(this.health)

    if (this.health <= 0) {
      this.sound.play('lose')
      this.gameOver()
    }
  }
}
