<template>
  <div class="app">
    <AppHeader class="app__header" />
    <div class="app__body">
      <!-- IpsumForm -->
      <GeneratorForm @submit.prevent="generate">
        <FormField class="dict">
          <label for="selDictionary">Dictionary</label>
          <SelectControl>
            <select id="selDictionary" v-model="dictionary">
              <option v-for="(_dict, idx) in dictionaries" :key="idx" :value="_dict">
                {{_dict.name}}
              </option>
            </select>
          </SelectControl>
        </FormField>

        <FormField class="paragraphs">
          <label for="numParagraphs">Paragraphs</label>
          <NumberControl
            id="numParagraphs"
            v-model.number="numParagraphs"
          />
        </FormField>

        <FormField class="addIntro">
          <CheckboxControl>
            <input
              type="checkbox"
              id="chkOpener"
              v-model="addIntro"
              :disabled="!canAddIntro"
            />
            <label for="chkOpener">Add Intro?</label>
          </CheckboxControl>
        </FormField>

        <Button type="submit" class="submit">
          Generate
        </Button>
      </GeneratorForm>

      <LoremIpsum
        :paragraphCount="numParagraphs"
        :dictionary="dictionary"
        :timestamp="generatedAt"
        :addIntro="addIntro"
      />
    </div>
    <AppFooter class="app__footer" />
  </div>
</template>

<script>
  import AppFooter from './AppFooter.vue'
  import AppHeader from './AppHeader.vue'
  import Button from './Button.vue'
  import CheckboxControl from './CheckboxControl.vue'
  import FormField from './FormField.vue'
  import GeneratorForm from './GeneratorForm.vue'
  import LoremIpsum, { Dictionaries } from './LoremIpsum.vue'
  import NumberControl from './NumberControl.vue'
  import SelectControl from './SelectControl.vue'

  export default {
    name: 'App',
    components: {
      AppFooter,
      AppHeader,
      Button,
      CheckboxControl,
      FormField,
      GeneratorForm,
      LoremIpsum,
      NumberControl,
      SelectControl,
    },
    data: () => ({
      addIntro: false,
      dictionaries: Dictionaries,
      dictionary: Dictionaries[0],
      generatedAt: null,
      numParagraphs: 1,
    }),
    watch: {
      dictionary() {
        this.generatedAt = null
      },
    },
    computed: {
      canAddIntro() {
        return ('intro' in this.dictionary.vocab)
      },
    },
    methods: {
      generate() {
        this.generatedAt = new Date()
      },
    },
  }
</script>

<style lang="scss">
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: system-ui, sans-serif;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fafafa;
    min-height: 100vh;
    margin: 0;
  }

  .app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      'header'
      'body'
      'footer';
    min-height: 100vh;

    &__header {
      grid-area: header;
    }

    &__body {
      grid-area: body;
    }

    &__footer {
      grid-area: footer;
    }
  }
</style>
