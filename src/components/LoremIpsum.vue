<script setup>
  import { ref, watch, computed } from 'vue'
  import Lorem from '../../lib/lorem'
  // Vue Components
  import Button from './Button.vue'
  import ContentWrapper from './ContentWrapper.vue'


  const DEFAULT = {
    copyStatus: '',
    paragraphs: [],
  }

  // ----- PROPS -----
  const props = defineProps({
    addIntro: Boolean,
    dictionary: Object,
    paragraphCount: Number,
    timestamp: Date,
  })

  // ----- DATA (refs) -----
  const blockquote = ref(null) // template ref
  const copyStatus = ref(DEFAULT.copyStatus)
  const paragraphs = ref(DEFAULT.paragraphs)


  // ----- COMPUTED (refs) -----
  const _timestamp = computed(() => {
    return (props.timestamp || new Date())
  })


  // ----- WATCHERS -----
  watch(_timestamp, () => {
    _unselectText()
    _reset()
    _generate()
  })


  // ----- METHODS -----
  function _reset() {
    copyStatus.value = DEFAULT.copyStatus
    paragraphs.value = DEFAULT.paragraphs
  }

  function _generate() {
    let _paragraphs = []
    let limit = props.paragraphCount
    let lorem = new Lorem(props.dictionary)

    while(limit--) {
      _paragraphs.push(lorem.paragraph)
    }

    if (props.addIntro) {
      let intro = lorem.intro
      if (intro) {
        // prepend intro to first paragraph
        let p = _paragraphs[0]
        p = `${intro}  ${p}`
        _paragraphs[0] = p
      }
    }

    paragraphs.value = _paragraphs
  }

  function _unselectText() {
    let selection = window.getSelection()
    selection.removeAllRanges()
  }

  function selectText() {
    _unselectText()
    let elementNode = blockquote.value
    let range = document.createRange()
    let selection = window.getSelection()

    // Add all generated text to the range
    range.selectNodeContents(elementNode)

    // Apply text selection to window
    selection.addRange(range)
  }

  async function copyText() {
    let _toClipboard = paragraphs.value.join('\n\n')
    copyStatus.value = ''

    try {
      await window.navigator.clipboard.writeText(_toClipboard)
      copyStatus.value = 'Success!'
    } catch (e) {
      copyStatus.value = 'Unable to copy'
    }

    setTimeout(() => {
      copyStatus.value = ''
    }, 3000)
  }
</script>

<template>
  <ContentWrapper v-if="timestamp" class="lorem-ipsum">
    <div class="action-bar">
      <Button @click="copyText">Copy text</Button>
      <span class="copy-status">{{ copyStatus }}</span>
      <!--
      <Button @click="selectText">Select text</Button>
      -->
    </div>
    <blockquote ref="blockquote">
      <p v-for="(paragraph, idx) in paragraphs" :key="idx">
        {{paragraph}}
      </p>
    </blockquote>
  </ContentWrapper>
</template>

<style lang="scss">
  /* LAYOUT */
  .lorem-ipsum {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    padding: 2rem;
    gap: 2em 0;

    > blockquote {
      margin: 0;
    }

    .action-bar {
      align-items: baseline;
      display: flex;
      gap: 8px;
      justify-content: space-between;
    }

    .copy-status {
      flex-grow: 1;
      font-size: 0.75em;
      opacity: 0.75;
    }
  }
</style>
