<template>
  <div class="form-field">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .form-field {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.25rem 0;
  }
</style>
