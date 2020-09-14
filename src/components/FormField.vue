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

  > * + * {
    margin-block-start: 0.25rem;
  }

  > label {
    font-weight: 600;
  }
}
</style>
