<script setup>
  import { computed } from 'vue'
  // Components
  import Button from './Button.vue'


  // ----- PROPS (reactive) -----
  const props = defineProps({
    id: String,
    modelValue: Number, // for [v-model] compatibility
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 5,
    }
  })


  // ----- COMPUTED (ref) -----
  const isAtMinimum = computed(() => {
    return ($value.value <= props.min)
  })
  const isAtMaximum = computed(() => {
    return ($value.value >= props.max)
  })


  // ----- METHODS -----
  function stepUp() {
    $value.value = Math.min($value.value + 1, props.max)
  }
  function stepDown() {
    $value.value = Math.max($value.value - 1, props.min)
  }


  // makes component compatible with [v-model] in parent template
  const emit = defineEmits(['update:modelValue'])
  const $value = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      emit('update:modelValue', val)
    }
  })
</script>

<template>
  <div class="number-control">
    <Button
      :disabled="isAtMinimum"
      @click="stepDown"
      class="number-decrement"
    >-</Button>

    <input
      :id="id"
      :max="max"
      :min="min"
      step="1"
      type="number"
      v-model="$value"
    />

    <Button
      :disabled="isAtMaximum"
      @click="stepUp"
      class="number-increment"
    >+</Button>
  </div>
</template>

<style lang="scss">
  @use "src/styles/scale";

  $width: scale.$x4--m;

  .number-control {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-areas: 'less ctrl more';
    grid-gap: 0.25rem 0.5rem;

    > input {
      grid-area: ctrl;
      width: $width;
      -moz-appearance: textfield;
           appearance: textfield;
      text-align: center;
      font: inherit;
    }

    > .ui-button {
      border-radius: 0;
      width: 2rem;

      &:disabled {
        cursor: not-allowed;
      }
    }

    .number-decrement {
      grid-area: less;
    }

    .number-increment {
      grid-area: more;
    }
  }
</style>
