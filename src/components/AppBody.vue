<template>
  <div class="app-body">
    <ContentWrapper>
      <!-- IpsumForm -->
      <GeneratorForm @submit.prevent="generate">
        <FormField class="dict">
          <label for="selDictionary">Dictionary</label>
          <SelectControl>
            <select id="selDictionary" v-model="dictionary">
              <option v-for="(_dict, idx) in dictionaries" :key="idx" :value="_dict">
                {{_dict}}
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

        <p class="submit">
          <Button type="submit">
            Generate
          </Button>
        </p>
      </GeneratorForm>

      <LoremIpsum
        :paragraphCount="numParagraphs"
        :dictionary="dictionary"
        :timestamp="generatedAt"
      />
    </ContentWrapper>
  </div>
</template>

<script>
import Button from './Button.vue'
import ContentWrapper from './ContentWrapper.vue'
import FormField from './FormField.vue'
import GeneratorForm from './GeneratorForm.vue'
import LoremIpsum, { DICTIONARIES } from './LoremIpsum.vue'
import NumberControl from './NumberControl.vue'
import SelectControl from './SelectControl.vue'

export default {
  name: 'AppBody',
  components: {
    Button,
    ContentWrapper,
    FormField,
    GeneratorForm,
    LoremIpsum,
    NumberControl,
    SelectControl,
  },
  data() {
    return {
      generatedAt: null,
      ipsumConfig: null,
      numParagraphs: 1,
      dictionary: DICTIONARIES[0],
      dictionaries: DICTIONARIES,
    }
  },
  methods: {
    generate() {
      this.generatedAt = new Date()
    },
  }
}
</script>

<style lang="scss">
.app-body {
  padding: 2rem;
}
</style>
