<template>
  <AppHeader />
  <AppBody />
  <AppFooter />
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import AppBody from './components/AppBody.vue'
export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    AppBody,
  },
}
</script>

<style lang="scss">
$ctrlHeight: 2rem;
html {
  box-sizing: border-box;
  font-size: 100%;
}
*, *::before, *::after { box-sizing: inherit; }
body {
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fafafa;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'body'
    'footer';
  height: 100vh;

  .app-header {
    grid-area: header;
  }

  .app-body {
    grid-area: body;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .app-footer {
    grid-area: footer;
  }
}
</style>
