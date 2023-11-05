<script setup>
  import ContentWrapper from './ContentWrapper.vue'
</script>

<template>
  <header class="app-header">
    <ContentWrapper>
      <h1>Lorem Ipsum Generator</h1>
    </ContentWrapper>
  </header>
</template>

<style lang="scss">
  @use "src/styles/media" as Media;

  /* LAYOUT */
  .app-header {
    padding: 1.5rem;
    text-align: center;
    z-index: 10;

    h1 {
      margin: 0;
    }
  }

  /* APPEARANCE */
  .app-header {
    background-color: #eee;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.07);

    h1 {
      font-size: 1.5em;
      transition: font-size 0.5s;

      @include Media.tablet {
        font-size: 2em;
      }
    }
  }
</style>
