<template>
  <form class="generator-form">
    <slot></slot>
  </form>
</template>

<style lang="scss">
$rowGap: 1.5rem;
$columnGap: 2rem;
.generator-form {
  align-items: end;
  display: grid;
  grid-auto-rows: auto;
  grid-gap: $rowGap $columnGap;
  grid-template-areas:
    "dict       dict"
    "paragraphs submit";
  grid-template-columns: auto 1fr;
  //justify-content: start;


  > .dict {
    grid-area: dict;
  }

  > .paragraphs {
    grid-area: paragraphs;
  }

  > .submit {
    grid-area: submit;
    align-self: end;
    justify-self: end;
    margin: 0;
  }

  @media (min-width: 35rem) {
    grid-template-columns: minmax(min-content, 30rem) auto auto;
    grid-template-areas: "dict paragraphs submit";

    > .submit {
      justify-self: start;
    }
  }
}
</style>
