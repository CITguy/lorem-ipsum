<template>
  <div class="select-control">
    <slot></slot>
    <div class="select-facade"></div>
  </div>
</template>

<style lang="scss">
  @use "src/styles/vars";

  $height: vars.$ctrlHeight;

  $backgroundColor: #fff;
  $borderColor: #ccc;
  $minWidth: 10rem;

  .select-control {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      'lbl'
      'ctrl';
    width: 100%;

    > label {
      grid-area: lbl;
    }

    > .select-facade,
    > select {
      grid-area: ctrl;
      min-width: $minWidth;
    }

    > select {
      -moz-appearance: none;
      appearance: none;
      border: none;
      padding-inline-start: 0.5rem;
      font: inherit;
      vertical-align: middle;
    }

    > .select-facade {
      pointer-events: none;
      position: relative;
      height: $height;
      border: 1px solid $borderColor;

      &::before,
      &::after {
        content: '';
        height: 100%;
        right: 0;
        width: 2rem;
        display: block;
        position: absolute;
      }

      &::before {
        background-color: $backgroundColor;
        border-left: 1px solid $borderColor;
      }

      &::after {
        background-color: currentColor;
        clip-path: polygon(0 0, 100% 0, 50% 100%);
        //transform-origin: center;
        transform: scale(0.25, 0.25);
      }
    }
  }
</style>
