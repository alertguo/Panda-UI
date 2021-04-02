<template>
  <button :class="{[`icon-${iconPosition}`]:true}" class="g-button" @click="$emit('click')">
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  //为了与外部的东西对齐
  vertical-align: middle;

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

  > .icon {
    order: 1;
    margin-right: .1em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }

    > .content {
      order: 1;
    }
  }

  > .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
