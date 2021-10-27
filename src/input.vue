<template>
  <div class="wrapper" :class="{'error':error}">
    <label>
<!--      value-值-->

      <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
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
<script>
  export default {
    // 添加name只是方便调试，google使用Vue插件方便看到
    name: 'GuluInput',
    props: {
      value: {
        type: String
      },
      // 不可选中
      disabled: {
        type: Boolean,
        default: false
      },
      // 只读，可选中
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String,
      }
    }
  }
</script>

<style lang="scss" scoped>
  $font-size: 12px;
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
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
        &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }
        &[disabled],&[readonly]{
          border-color: #ccc;
          color: #ccc;
          cursor: not-allowed;
        }
      }
    }
    &.error {
      > label > input { border-color: $red; }
    }
  }
</style>
