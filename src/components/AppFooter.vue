<template>
  <footer class="app-footer">
    v{{version}} ({{license}}) |
    <a href="https://github.com/CITguy/lorem-ipsum">source</a>
  </footer>
</template>

<script>
import pkg from '../../package.json'

export default {
  name: 'AppFooter',
  data() {
    return {
      version: pkg.version,
      license: pkg.license,
    }
  }
}
</script>

<style lang="scss">
.app-footer {
  background-color: #eee;
  border-top: 1px solid #ccc;
  bottom: 0;
  box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.07);
  font-size: 0.75rem;
  font-weight: 300;
  padding: 1rem 2rem;
  position: sticky;
  text-align: center;
}
</style>
