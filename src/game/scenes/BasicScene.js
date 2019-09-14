import { Scene, Input } from 'phaser'
import backgroundImage from '../../assets/logo.svg'
import rocketImage from '../../assets/icons8-space-shuttle.svg'
import missleImage from '../../assets/icons8-missile.svg'
import enemyImage from '../../assets/icons8-fighter.svg'
import explodeMissleImage from '../../assets/icons8-explosion.svg'
import heartImage from '../../assets/icons8-heart.svg'
import heartEmptyImage from '../../assets/icons8-heart-empty.svg'
import fireImage from '../../assets/icons8-fire.svg'
import fireEmptyImage from '../../assets/icons8-fire-empty.svg'

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
    this.border = 16
    this.width = this.scale.width
    this.height = this.scale.height
    this.sizeRocket = 96
    this.sizeMissle = 32
    this.sizeExplosionMissle = 64
    this.sizeHeart = 32

    this.maxHealth = 5
    this.health = this.maxHealth

    this.overheatMax = 10
    this.overheat = 0
    this.sizeOverheat = 24

    this.score = 0

    this.background = this.add.image(0, 0, 'background')
    this.background.setDisplaySize(innerWidth, innerHeight)
    this.background.setPosition(400, 300)
    this.background.setVisible(false)

    this.rocket = this.physics.add.image(this.width / 2, this.height - (this.sizeRocket / 2), 'rocket')
    this.rocket.setDisplaySize(this.sizeRocket, this.sizeRocket)
    this.rocket.setAngle(-90)
    this.rocket.setCollideWorldBounds(true, 0, 0)
    this.rocket.setData('speed', 10)
    this.rocket.setData('blockwidth', 1)
    this.rocket.setData('blockheight', 1)

    this.left = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT)
    this.right = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT)
    this.space = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE)
    this.esc = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.ESC)

    this.scoreText = this.add.text(this.border, this.border, 'SCORE: 0')

    this.hearts = this.physics.add.group()
    for (let i = 0; i < this.health; i++) {
      const heart = this.hearts.create(this.width - (this.sizeHeart * this.maxHealth) + (i * this.sizeHeart),
        this.height - (this.sizeHeart / 2), 'heart')
      heart.setData('blockwidth', 1)
      heart.setData('blockheight', 1)
      heart.setDisplaySize(this.sizeHeart, this.sizeHeart)
    }

    this.overheating = this.physics.add.group()
    for (let i = 0; i < this.overheatMax; i++) {
      const oh = this.overheating.create(this.border + (i * this.sizeOverheat), this.height - (this.sizeOverheat / 2), 'fireEmpty')
      oh.setData('blockwidth', 1)
      oh.setData('blockheight', 1)
      oh.setDisplaySize(this.sizeOverheat, this.sizeOverheat)
    }

    this.missles = this.physics.add.group()
    this.enemies = this.physics.add.group()
    const collideMissleEnemy = this.physics.add.collider(this.missles, this.enemies, this.hitMissleEnemy, null, this)
    collideMissleEnemy.overlapOnly = true
    this.spawnEnemy()

    this.time.addEvent({
      delay: 1000,
      callback: this.moveEnemies,
      callbackScope: this,
      loop: true
    })

    this.time.addEvent({
      delay: 100,
      callback: this.scoring,
      callbackScope: this,
      loop: true
    })
  }

  scoring () {
    this.score++
    this.scoreText.setText('SCORE: ' + this.score)
  }

  resizeAndRelocate () {
    const width = this.scale.width
    const height = this.scale.height
    const blockwidth = width / 20
    const blockheight = height / 15

    // Background
    this.background.setDisplaySize(width, height)

    // Rocket
    this.rocket.setDisplaySize(blockwidth * this.rocket.data.get('blockwidth'),
      blockheight * this.rocket.data.get('blockheight'))

    // Hearts
    for (var i = 0; i < this.hearts.children.size; i++) {
      const heart = this.hearts.children.entries[i]
      heart.setDisplaySize(blockwidth * heart.data.get('blockwidth'), blockheight * heart.data.get('blockheight'))
      heart.setPosition(width - (blockwidth * heart.data.get('blockwidth') * this.maxHealth) + (i * blockwidth * heart.data.get('blockwidth')),
        height - (blockheight * heart.data.get('blockheight') / 2))
    }

    // Missles
    this.missles.getChildren().forEach(missle => {
      missle.setDisplaySize(blockwidth * missle.data.get('blockwidth'), blockheight * missle.data.get('blockheight'))
    })

    // Enemies
    this.enemies.getChildren().forEach(enemy => {
      enemy.setDisplaySize(blockwidth * enemy.data.get('blockwidth'), blockheight * enemy.data.get('blockheight'))
    })
  }

  moveRocket (x, y) {
    this.rocket.setPosition(this.rocket.x + x, this.rocket.y + y)
  }

  shootMissle () {
    if (!this.cooldownMissle && this.overheat <= this.overheatMax) {
      const missle = this.missles.create(this.rocket.x, this.rocket.y - (this.sizeRocket / 2), 'missle')
      missle.setDisplaySize(this.sizeMissle, this.sizeMissle)
      missle.setAngle(-45)
      missle.setData('speed', -500)
      missle.setVelocityY(missle.data.get('speed'))
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
    this.score += enemy.data.get('scoreOnHit')

    const explosionMissle = this.physics.add.image(enemy.x, enemy.y - (this.sizeExplosionMissle / 2), 'explodeMissle')
    explosionMissle.setDisplaySize(this.sizeExplosionMissle, this.sizeExplosionMissle)
    explosionMissle.setAngle(0)
    explosionMissle.setBounce(0, 0)
    // eslint-disable-next-line no-return-assign
    setTimeout(() => explosionMissle.destroy(true), 200)

    enemy.setData('health', enemy.data.get('health') - 1)
    if (enemy.data.get('health') <= 0) {
      this.score += enemy.data.get('scoreOnKill')
      enemy.destroy(true)
    }
  }

  spawnEnemy () {
    const enemy = this.enemies.create(Math.floor(Math.random() * (this.width - this.sizeRocket)) + (this.sizeRocket / 2),
      this.sizeRocket / 2, 'enemy')
    enemy.setDisplaySize(this.sizeRocket, this.sizeRocket)
    enemy.setAngle(180)
    enemy.setData('speed', this.sizeRocket)
    enemy.setData('health', 3)
    enemy.setData('scoreOnHit', 3)
    enemy.setData('scoreOnKill', 50)
    enemy.setAccelerationY(20)
    enemy.setVelocityY(Math.floor(Math.random() * 300))
  }

  moveEnemies () {
    this.enemies.getChildren().forEach(enemy => {
      // enemy.setPosition(enemy.x, enemy.y + enemy.data.get('speed'))
    })
    if (Math.floor(Math.random() * 10) < 2) {
      this.spawnEnemy()
    }
  }

  isPaused () {
    return this.scene.isPaused()
  }

  resume () {
    // this.scene.resume()
    this.esc.reset()
  }

  update (time, delta) {
    if (this.left.isDown) {
      if (this.rocket.body.velocity.x < 0) {
        this.rocket.setAccelerationX(this.rocket.body.velocity.x - 50)
      } else if (this.rocket.body.velocity.x === 0) {
        this.rocket.setVelocityX(-200)
      }
    }
    if (this.right.isDown) {
      if (this.rocket.body.velocity.x > 0) {
        this.rocket.setAccelerationX(this.rocket.body.velocity.x + 50)
      } else if (this.rocket.body.velocity.x === 0) {
        this.rocket.setVelocityX(200)
      }
    }
    if (!this.right.isDown && !this.left.isDown) {
      this.rocket.setVelocityX(0)
      this.rocket.setAccelerationX(0)
    }
    if (this.space.isDown) {
      this.shootMissle()
    }
    if (this.esc.isDown) {
      this.scene.pause('BasicScene')
    }

    for (let i = 0; i < this.overheating.children.size; i++) {
      if (i < this.overheat) {
        this.overheating.children.entries[i].setTexture('fire')
      } else {
        this.overheating.children.entries[i].setTexture('fireEmpty')
      }
    }

    this.enemies.getChildren().forEach(enemy => {
      if (enemy.y >= this.height) {
        this.hearts.getChildren()[this.health - 1].destroy(true)
        this.health = this.health - 1
        enemy.destroy(true)
        this.spawnEnemy()
      }
    })
    if (this.health <= 0) {
      this.physics.pause()
      this.sys.pause()
      this.missles.getChildren().forEach(missle => missle.destroy(true))
    }
  }
}
