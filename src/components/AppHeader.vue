<template>
  <header class="app-header">
    <ContentWrapper>
      <h1>Lorem Ipsum Generator</h1>
      <p>
        Generate some snazzy verbiage for your filler-text pleasure.
      </p>
    </ContentWrapper>
  </header>
</template>

<script>
import ContentWrapper from './ContentWrapper.vue'
export default {
  name: 'AppHeader',
  components: {
    ContentWrapper,
  },
}
</script>

<style lang="scss">
.app-header {
  background-color: #eee;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.07);
}
</style>
