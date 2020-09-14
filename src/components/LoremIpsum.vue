<template>
  <blockquote
    class="lorem-ipsum"
    v-if="timestamp"
  >
    <p v-for="(paragraph, idx) in paragraphs" :key="idx">
      {{paragraph}}
    </p>
  </blockquote>
</template>

<script>
import Generators, { names as DICTIONARIES } from '../data/vocab'

export {
  DICTIONARIES,
}

export default {
  name: 'LoremIpsum',
  props: {
    paragraphCount: Number,
    timestamp: Date,
    dictionary: String,
  },
  data() {
    return {
      paragraphs: [],
    }
  },
  watch: {
    timestamp() {
      this.generate()
    },
  },
  methods: {
    generate() {
      let _paragraphs = []
      let limit = this.paragraphCount
      let lorem = Generators[this.dictionary]

      while(limit--) {
        _paragraphs.push(lorem.paragraph)
      }

      this.paragraphs = _paragraphs
    },
  }
}
</script>

<style lang="scss">
.lorem-ipsum {
  background-color: #fff;
  border: 1px solid #ddd;
  line-height: 1.5;
  margin: 2rem 0;
  padding: 2rem;

  > * {
    margin: 0;
  }

  > * + * {
    margin-block-start: 1em;
  }
}
</style>
