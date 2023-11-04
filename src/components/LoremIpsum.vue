<template>
  <ContentWrapper v-if="timestamp" class="lorem-ipsum">
    <blockquote ref="blockquote">
      <p v-for="(paragraph, idx) in paragraphs" :key="idx">
        {{paragraph}}
      </p>
    </blockquote>

    <div class="button-bar">
      <Button @click="highlightText">Select Text</Button>
      <!--
      <Button @click="copyText">Copy Text</Button>
      -->
    </div>
  </ContentWrapper>
</template>

<script>
  import Button from './Button.vue'
  import ContentWrapper from './ContentWrapper.vue'
  import Lorem from '../../lib/lorem'
  import Dictionaries from '../dictionaries'

  // named exports
  export {
    Dictionaries
  }

  // default export
  export default {
    name: 'LoremIpsum',
    components: {
      Button,
      ContentWrapper,
    },
    props: {
      addIntro: Boolean,
      dictionary: Object,
      paragraphCount: Number,
      timestamp: Date,
    },
    data: () => ({
      paragraphs: [],
    }),
    watch: {
      timestamp() {
        this.unselectText()
        this.generate()
      },
    },
    methods: {
      generate() {
        let _paragraphs = []
        let limit = this.paragraphCount
        let lorem = new Lorem(this.dictionary)

        while(limit--) {
          _paragraphs.push(lorem.paragraph)
        }

        if (this.addIntro) {
          let intro = lorem.intro
          if (intro) {
            // prepend intro to first paragraph
            let p = _paragraphs[0]
            p = `${intro}  ${p}`
            _paragraphs[0] = p
          }
        }

        this.paragraphs = _paragraphs
      },
      unselectText() {
        let selection = window.getSelection()
        selection.removeAllRanges()
      },
      highlightText() {
        this.unselectText()
        let elementNode = this.$refs.blockquote
        let range = document.createRange()
        let selection = window.getSelection()

        // Add all generated text to the range
        range.selectNodeContents(elementNode)

        // Apply text selection to window
        selection.addRange(range)
      },
      copyText() {
        // TODO...
      },
    },
  }
</script>

<style lang="scss">
  @use "src/styles/media" as Media;

  /* LAYOUT */
  .lorem-ipsum {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    padding: 2rem;

    > * {
      margin: 0;
    }

    > * + * {
      margin-block-end: 2em;
    }

    > blockquote {
      order: 2;
    }

    > .button-bar {
      display: none;
      order: 1;
    }

    @include Media.desktop {
      .button-bar {
        display: block;
      }
    }
  }

  /* APPEARANCE */
  .lorem-ipsum {
    /* TBD... */
  }
</style>
