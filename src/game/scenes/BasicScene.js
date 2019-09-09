import { Scene, Input } from 'phaser'
import backgroundImage from '../../assets/logo.svg'
import rocketImage from '../../assets/icons8-space-shuttle.svg'
import missleImage from '../../assets/icons8-missile.svg'
import enemyImage from '../../assets/icons8-fighter.svg'
import explodeMissleImage from '../../assets/icons8-explosion.svg'
import heartImage from '../../assets/icons8-heart.svg'
import heartEmptyImage from '../../assets/icons8-heart-empty.svg'

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
  }

  create () {
    this.width = 1900
    this.height = 900
    this.sizeRocket = 96
    this.sizeMissle = 32
    this.sizeExplosionMissle = 16
    this.sizeHeart = 32

    this.maxHealth = 5
    this.health = this.maxHealth

    this.background = this.add.image(0, 0, 'background')
    this.background.setDisplaySize(innerWidth, innerHeight)
    this.background.setPosition(400, 300)
    this.background.setVisible(false)

    this.rocket = this.physics.add.image(this.width / 2, this.height - (this.sizeRocket / 2), 'rocket')
    this.rocket.setDisplaySize(this.sizeRocket, this.sizeRocket)
    this.rocket.setAngle(-90)
    this.rocket.setCollideWorldBounds(true, 0, 0)
    this.rocket.setData('speed', 10)

    this.left = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT)
    this.right = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT)
    this.space = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE)

    this.hearts = this.physics.add.group()
    for (var i = 0; i < this.health; i++) {
      const heart = this.hearts.create(this.width - (this.sizeHeart * this.maxHealth) + (i * this.sizeHeart),
        this.height - (this.sizeHeart / 2), 'heart')
      heart.setDisplaySize(this.sizeHeart, this.sizeHeart)
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
  }

  moveRocket (x, y) {
    this.rocket.setPosition(this.rocket.x + x, this.rocket.y + y)
  }

  shootMissle () {
    if (!this.cooldownMissle) {
      const missle = this.missles.create(this.rocket.x, this.rocket.y - (this.sizeRocket / 2), 'missle')
      missle.setDisplaySize(this.sizeMissle, this.sizeMissle)
      missle.setAngle(-45)
      missle.setData('speed', -500)
      missle.setVelocityY(missle.data.get('speed'))
      this.cooldownMissle = true
      // eslint-disable-next-line no-return-assign
      setTimeout(() => this.cooldownMissle = false, 200)
    }
  }

  hitMissleEnemy (missle, enemy) {
    missle.destroy(true)

    const explosionMissle = this.physics.add.image(enemy.x, enemy.y - (this.sizeExplosionMissle / 2), 'explodeMissle')
    explosionMissle.setDisplaySize(this.sizeExplosionMissle, this.sizeExplosionMissle)
    explosionMissle.setAngle(0)
    explosionMissle.setBounce(0, 0)
    // eslint-disable-next-line no-return-assign
    setTimeout(() => explosionMissle.destroy(true), 200)

    enemy.setData('health', enemy.data.get('health') - 1)
    if (enemy.data.get('health') <= 0) {
      enemy.destroy(true)
    }
  }

  spawnEnemy () {
    const enemy = this.enemies.create(Math.floor(Math.random() * (this.width - this.sizeRocket)) + (this.sizeRocket / 2),
      this.sizeRocket / 2, 'enemy')
    enemy.setDisplaySize(this.sizeRocket, this.sizeRocket)
    enemy.setAngle(180)
    enemy.setData('speed', this.sizeRocket)
    enemy.setData('health', 5)
  }

  moveEnemies () {
    this.enemies.getChildren().forEach(enemy => {
      enemy.setPosition(enemy.x, enemy.y + enemy.data.get('speed'))
      if (enemy.y >= this.height) {
        this.hearts.getChildren()[this.health - 1].destroy(true)
        this.health = this.health - 1
        enemy.destroy(true)
        this.spawnEnemy()
      }
      if (this.health <= 0) {
        this.physics.pause()
      }
    })
    if (Math.floor(Math.random() * 10) < 2) {
      this.spawnEnemy()
    }
  }

  update (time, delta) {
    if (this.left.isDown) {
      this.moveRocket(-1 * this.rocket.data.get('speed'), 0)
    }
    if (this.right.isDown) {
      this.moveRocket(this.rocket.data.get('speed'), 0)
    }
    if (this.space.isDown) {
      this.shootMissle()
    }
  }
}
