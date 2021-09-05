<template>
  <div class="number-control">
    <Button
      class="number-decrement"
      @click="increment(-1)"
      :disabled="isAtMinimum"
    >
      -
    </Button>

    <!-- hide -->
    <!-- TODO:
      type="text"
      inputmode="numeric"
      pattern="\d+"
    -->
    <input
      :id="id"
      :min="min"
      :max="max"
      step="1"
      type="number"

      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <Button
      class="number-increment"
      @click="increment(1)"
      :disabled="isAtMaximum"
    >
      +
    </Button>
  </div>
</template>

<style lang="scss">
@use "@/styles/scale";

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

<script>
import Button from './Button.vue'

export default {
  name: 'NumberControl',
  components: {
    Button,
  },
  props: {
    id: String,
    modelValue: Number,
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 5,
    }
  },
  computed: {
    isAtMinimum() {
      return (this.modelValue <= this.min)
    },
    isAtMaximum() {
      return (this.modelValue >= this.max)
    }
  },
  methods: {
    increment(step=1) {
      let newValue = this.modelValue + step
      if (newValue > this.max) {
        newValue = this.max
      }
      if (newValue < this.min) {
        newValue = this.min
      }
      this.$emit('update:modelValue', newValue)
    },
    decrement() {
      let newValue = this.modelValue - 1
      if (newValue < this.min) {
        newValue = this.min
      }
      this.$emit('update:modelValue', newValue)
    }
  },
}
</script>
