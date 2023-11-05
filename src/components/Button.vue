<template>
  <button
    class="ui-button"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
  @use "src/styles/media" as Media;

  /* LAYOUT */
  .ui-button {
    align-content: center;
    align-items: center;
    display: flex;
    height: 2rem;
    justify-content: center;
    margin: 0;
    padding: 0 1.25rem;
    white-space: nowrap;
    width: 100%;

    @include Media.mobile-lg {
      display: inline-flex;
      width: auto;
    }
  }

  /* APPEARANCE */
  .ui-button {
    /* RESET */
    font: inherit;
    line-height: 1;

    /* BASE */
    background: #eee;
    border: 1px solid #ccc;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    color: #222;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: box-shadow 0.35s;

    &:enabled {
      &:hover {
        background-color: #f5f5f5;
        border-color: #999;
      }

      &:active {
        background-color: #ddd;
      }
    }

    &:disabled {
      background-color: #f5f5f5;
      border-color: #e3e3e3;
      box-shadow: none;
      color: #777;
      cursor: default;
      font-weight: 400;
      transition: box-shadow 0.35s;
    }
  }
</style>
