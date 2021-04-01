<template>
  <button class="g-button">按钮</button>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {
      background-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    /*去掉点击时的蓝色框*/
    &:focus {
      outline: none;
    }
  }
</style>
