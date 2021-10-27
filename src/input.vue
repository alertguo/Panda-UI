<template>
  <div :class="{'error':error}" class="wrapper">
    <label>
      <!--      value-值-->
      <input :disabled="disabled" :readonly="readonly" :value="value" type="text"
             @blur="$emit('blur',$event.target.value)"
             @change="$emit('change',$event.target.value)"
             @focus="$emit('focus',$event.target.value)"
             @input="$emit('input',$event.target.value)">
    </label>
    <!--    直接使用template，可以少一个div，也不用另外加样式-->
    <template v-if="error">
      <g-icon class="icon-error" name="error"></g-icon>
      <span class="errorMassage">{{ error }}</span>
    </template>
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
import Icon from './icon'

export default {
  // 添加name只是方便调试，google使用Vue插件方便看到
  name: 'GuluInput',
  components: {
    'g-icon': Icon
  },
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

  :not(:last-child) {
    margin-right: .5em;
  }

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

      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }

      &[disabled], &[readonly] {
        border-color: #ccc;
        color: #ccc;
        cursor: not-allowed;
      }
    }
  }

  &.error {
    > label > input {
      border-color: $red;
    }
  }

  .icon-error {
    fill: $red;
  }

  .errorMassage {
    color: red;
  }
}
</style>
