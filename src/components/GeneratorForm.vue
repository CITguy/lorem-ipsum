<template>
  <ContentWrapper>
    <form class="generator-form">
      <slot></slot>
    </form>
  </ContentWrapper>
</template>

<script>
  import ContentWrapper from './ContentWrapper.vue'
  export default {
    name: 'GeneratorForm',
    components: {
      ContentWrapper,
    }
  }
</script>

<style lang="scss">
  @use "src/styles/media" as Media;
  @use "src/styles/vars" as *;

  $gap: 1.5rem;

  .generator-form {
    align-items: end;
    background-color: #fff;
    border-color: transparent;
    border-bottom-color: $borderColor;
    border-style: solid;
    border-width: 0 1px 1px;
    justify-content: start;
    padding: 2rem;
    position: sticky;
    top: 0;

    > * + * {
      margin-block-start: 1.5rem;
    }

    > .dict {
      grid-area: dict;
    }

    > .paragraphs {
      grid-area: paragraphs;
    }

    > .submit {
      grid-area: submit;
    }

    @media (min-width: $maxLine) {
      border-color: $borderColor;
    }

    @include Media.mobile-lg {
      display: grid;
      grid-auto-rows: auto;
      grid-gap: $gap;
      grid-template-areas:
        "dict       dict"
        "paragraphs intro"
        "submit     .";
      grid-template-columns: auto 1fr;
      justify-content: start;

      > * + * {
        margin: 0;
      }
    }

    @include Media.tablet-sm {
      grid-template-columns: 1fr auto;
      grid-template-areas:
        "dict  paragraphs"
        "intro submit";
    }

    @include Media.tablet-lg {
      grid-template-columns: minmax(min-content, 30rem) auto auto;
      grid-template-areas:
        "dict  paragraphs submit"
        "intro .          .";
    }
  }
</style>
