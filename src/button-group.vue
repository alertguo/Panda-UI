<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>

</script>
<style lang="scss">
$border-radius: 4px;

.g-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .g-button {
    border-radius: 0;
    //就使得两个按钮像合并了
    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }

  }
}
</style>
