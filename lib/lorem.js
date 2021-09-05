/*
 * Dictionary {
 *   config? {
 *     # (0 < paragraphMin < paragraphMax)
 *     # min=0; max=paragraphMax - 1
 *     paragraphMin? Integer [3]
 *
 *     # (0 < paragraphMin < paragraphMax)
 *     # min=paragraphMin + 1
 *     paragraphMax? Integer [6]
 *   }
 *
 *   vocab {
 *     intro? Array<String>
 *
 *     # used to generate paragraphs
 *     sentence Array<String>
 *
 *     # used to generate sentences and intros
 *     [prop String]: value Array<String>
 *   }
 * }
 */

/**
 * Calculate a positive integer `N` where `min ≤ N ≤ max`.
 *
 * Float arguments will be converted to integers via `Math.floor()`.
 *
 * @private
 * @param {number} [min=0]
 * @param {number} [max=1]
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

const vocabProxyHandler = {
  /**
   * @param {object} vocab - JSON object
   * @param {string} prop
   *
   * @returns {string}
   */
  get(vocab, prop) {
    if (!vocab[prop]) {
      return ''
    }

    /* vocab[prop]: string[] */
    let _values = vocab[prop]
    if (_values.length > 0) {
      let idx = Math.floor(Math.random() * _values.length)
      return _values[idx]
    }

    return `<${prop.toUpperCase()}>`
  }
}

const DEFAULT_CONFIG = {
  paragraphMin: 3, // min: 0; max: paragraphMax - 1
  paragraphMax: 6, // min: paragraphMin + 1
}

// see https://regex101.com/r/S9MdAe/1
const PROP_PATTERN = /({{[^}]*\b}})/g; // {{prop}}

/**
 * Interpolate template string using given context.
 *
 * @private
 * @param {string} template
 * @param {object} context
 * @returns {string}
 */
function interpolate(template, context) {
  return template.replace(PROP_PATTERN, (match) => {
    let prop = match.replace(/[{}]/g, '')
    return context[prop]
  })
}

/**
 * Ensure first letter of string is capitalized.
 * @private
 */
function capitalizeSentence(str) {
  return str.replace(/^./, (match) => match.toUpperCase())
}

export default class LoremGenerator {
  /**
   * @param {object} dict
   */
  constructor(dict) {
    this._dict = dict
    this.config = { ...DEFAULT_CONFIG, ...dict.config }
  }

  /**
   * @returns {object}
   */
  get vocab() {
    if (!this._proxy) {
      // Proxy object returns a random entry for the requested prop.
      // Example: vocab.noun () => rawVocab.noun[randomIndex]
      this._proxy = new Proxy(this._dict.vocab, vocabProxyHandler)
    }
    return this._proxy
  }

  /**
   * @returns {string}
   */
  get intro() {
    return interpolate(this.vocab.intro, this.vocab)
  }

  /**
   * @returns {string}
   */
  get sentence() {
    let _sentence = this.vocab.sentence
    let interpolated = interpolate(_sentence, this.vocab)
    let result = capitalizeSentence(interpolated)
    return result
  }

  /**
   * @returns {string}
   */
  get paragraph() {
    let { paragraphMin, paragraphMax } = this.config
    let sentences = []
    let limit = between(paragraphMin, paragraphMax)

    while(limit--) {
      sentences.push(this.sentence)
    }

    // 2 spaces between each sentence
    let paragraph = sentences.join('  ')

    return paragraph
  }
}
