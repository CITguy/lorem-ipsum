<template>
  <button
    class="ui-button"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss">
.ui-button {
  /* RESET */
  font: inherit;
  line-height: 1;
  padding: 0;
  margin: 0;
  background: none;
  border: none;

  /* BASE */
  align-content: center;
  align-items: center;
  background-color: #eee;
  //border-radius: 3em;
  border: 1px solid #ccc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  color: #222;
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  font-weight: 500;
  height: 2rem;
  justify-content: center;
  padding: 0 1.25rem;

  &:hover {
    background-color: #f5f5f5;
    border-color: #999;
  }

  &:active {
    background-color: #ddd;
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #e3e3e3;
    box-shadow: none;
    color: #777;
    cursor: default;
    font-weight: 400;
  }
}
</style>
