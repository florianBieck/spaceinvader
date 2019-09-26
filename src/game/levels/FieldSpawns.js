export default class FieldSpawns {
  constructor (beta, gamma, delta, epsilon) {
    this.beta = beta
    this.gamma = gamma
    this.delta = delta
    this.epsilon = epsilon
  }

  getSpawnSum () {
    return this.beta + this.gamma + this.delta + this.epsilon
  }

  getSpawns () {
    return [this.beta, this.gamma, this.delta, this.epsilon]
  }
}
