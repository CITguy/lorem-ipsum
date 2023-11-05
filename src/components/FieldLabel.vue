<script setup>
  defineProps({
    for: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <label
    class="field-label"
    :for="for"
  >
    <slot></slot>
  </label>
</template>

<style lang="scss">
  .field-label {
    font-weight: 600;
  }
</style>
