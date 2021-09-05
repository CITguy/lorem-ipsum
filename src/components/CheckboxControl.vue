<template>
  <div class="checkbox-control">
    <slot></slot>

    <div class="checkbox-facade"></div>
  </div>
</template>

<style lang="scss">
  /*
     +------+-------+
     | ctrl | label |
     |      | ...   |
     +------+-------+
  */
  .checkbox-control {
    display: grid;
    grid-template-areas: 'ctrl lbl';
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    grid-gap: 0.5em;

    > label {
      grid-area: lbl;
      font-weight: 600;
      line-height: 1.5;
      white-space: nowrap;
    }

    > input[type="checkbox"] {
      display: inline-block;
      grid-area: ctrl;
      height: 1.5em;
      margin: 0;
      padding: 0;
      width: 1.5em;
      border: 1px solid #ccc;

      &:disabled ~ label {
        opacity: 0.5;
        font-weight: 400;
      }
    }
  }
</style>
