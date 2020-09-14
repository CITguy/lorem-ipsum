/**
 * Calculate a positive integer `N` where `min ≤ N ≤ max`.
 *
 * Float arguments will be converted to integers via `Math.floor()`.
 *
 * @param {number} [min=0]
 * @param {number} [max=1]
 *
 * @returns {integer}
 */
function between(min=0, max=1) {
  // always return positive integer (0 ≤ min)
  let Min = (min < 0 ? 0 : Math.floor(min))
  let Max = Math.floor(max)

  // calculate random number `N` where `0 ≤ N ≤ max`
  let N = Math.floor(Math.random() * (Max + 1))

  // ensure that result `R` satisifies `Min ≤ R ≤ Max`
  return Math.max(Min, Math.min(N, Max))
}

const proxyHandler = {
  get(target, prop) {
    let _values = target[prop]
    if (_values.length > 0) {
      let idx = Math.floor(Math.random() * _values.length)
      return _values[idx]
    }
    return `<${prop.toUpperCase()}>`
  }
}

export default class LoremGenerator {
  constructor(config) {
    this.config = config
  }

  get vocab() {
    if (!this._proxy) {
      // Proxy object returns a random entry for the requested property.
      // Example: vocab.noun () => rawVocab.noun[randomIndex]
      this._proxy = new Proxy(this.config, proxyHandler)
    }

    return this._proxy
  }

  get sentence() {
    let _sentence = this.vocab.sentence

    // see https://regex101.com/r/S9MdAe/1
    let regVar = /({{[^}]*\b}})/g; // {{var}}

    let interpolated = _sentence.replace(regVar, (match) => {
      let prop = match.replace(/[{}]/g, '')
      return this.vocab[prop]
    })

    let result = interpolated.replace(/^./, (match) => match.toUpperCase())

    return result
  }

  get paragraph() {
    let sentences = []
    let limit = between(3, 6)
    while(limit--) {
      sentences.push(this.sentence)
    }
    // 2 spaces between each sentence
    return sentences.join('  ')
  }
}
