<script setup>
  import { ref, watch, computed } from 'vue'
  import Dictionaries from '../dictionaries'
  // Components
  import AppFooter from './AppFooter.vue'
  import AppHeader from './AppHeader.vue'
  import Button from './Button.vue'
  import CheckboxControl from './CheckboxControl.vue'
  import FieldLabel from './FieldLabel.vue'
  import FormField from './FormField.vue'
  import GeneratorForm from './GeneratorForm.vue'
  import LoremIpsum from './LoremIpsum.vue'
  import NumberControl from './NumberControl.vue'
  import SelectControl from './SelectControl.vue'

  // ----- DATA (refs) -----
  const addIntro = ref(false)
  const dictionaries = ref(Dictionaries)
  const dictionary = ref(Dictionaries[0])
  const generatedAt = ref(null)
  const numParagraphs = ref(1)

  // ----- WATCHERS -----
  watch(dictionary, () => {
    generatedAt.value = null
  })

  // ----- COMPUTED -----
  const canAddIntro = computed(() => {
    return ('intro' in dictionary.value.vocab)
  })

  function generate() {
    generatedAt.value = new Date()
  }
</script>

<template>
  <div class="app">
    <AppHeader class="app__header" />
    <div class="app__body">
      <GeneratorForm @submit.prevent="generate">
        <FormField class="dict">
          <FieldLabel for="selDictionary">Dictionary</FieldLabel>
          <SelectControl>
            <select id="selDictionary" v-model="dictionary">
              <option v-for="(_dict, idx) in dictionaries" :key="idx" :value="_dict">
                {{_dict.name}}
              </option>
            </select>
          </SelectControl>
        </FormField>

        <FormField class="paragraphs">
          <FieldLabel for="numParagraphs">Paragraphs</FieldLabel>
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
            <FieldLabel for="chkOpener">Add Intro?</FieldLabel>
          </CheckboxControl>
        </FormField>

        <Button type="submit" class="submit">
          Generate
        </Button>
      </GeneratorForm>

      <LoremIpsum
        :addIntro="addIntro"
        :dictionary="dictionary"
        :timestamp="generatedAt"
        :paragraphCount="numParagraphs"
      />
    </div>
    <AppFooter class="app__footer" />
  </div>
</template>

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
