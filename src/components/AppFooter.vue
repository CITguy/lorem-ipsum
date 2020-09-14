<template>
  <footer class="app-footer">
    <div class="right">
      <a href="">v{{version}}</a>
    </div>
  </footer>
</template>

<script>
import pkg from '../../package.json'

export default {
  name: 'AppFooter',
  data() {
    return {
      version: pkg.version,
    }
  }
}
</script>

<style lang="scss">
.app-footer {
  background-color: #eee;
  bottom: 0;
  font-size: 0.75rem;
  font-weight: 300;
  padding: 1rem 2rem;
  position: sticky;
  box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.07);
  border-top: 1px solid #ccc;
}
</style>
