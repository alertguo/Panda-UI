<template>
  <div class="wrapper">
    <label>
      <input :value="value" type="text">
    </label>
  </div>
</template>

<!--<script lang="ts">-->
<!--  import Vue from 'vue'-->
<!--  import {Component} from 'vue-property-decorator'-->
<!--  @Component-->
<!--  export default class input extends Vue{-->

<!--  }-->
<!--</script>-->
<script lang="js">
  export default {
    // 添加name只是方便调试，google使用Vue插件方便看到
    name: 'GuluInput',
    props: {
      value: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  //$button-height: 32px;
  //$button-bg: white;
  //$button-active-bg: #eee;
  //$color: #333;
  //$border-color: #999;
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  .wrapper {
    font-size: $font-size;
    > label {
      > input {
        height: 32px;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0 8px;
        font-size: inherit;
        &:hover {
          border-color: $border-color-hover;
        }
      }
    }
  }
</style>
