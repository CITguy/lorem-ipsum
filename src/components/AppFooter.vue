<script setup>
  import { version, author } from '../../package.json'

  const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__content">
      <div>
        &copy;{{year}} {{author}}
      </div>

      <div>
        v{{version}}
        (<a href="https://github.com/CITguy/lorem-ipsum">source</a>)
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  /* LAYOUT */
  .app-footer {
    padding: 1.5rem;
    text-align: center;

    &__content {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 80ch;
    }
  }

  /* APPEARANCE */
  .app-footer {
    background-color: #eee;
    border-top: 1px solid #ccc;
    box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.07);
    font-size: 0.75rem;
    font-weight: 300;
  }
</style>
