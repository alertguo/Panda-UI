<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">默认按钮</g-button>
    <g-button icon="setting" icon-position="right">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <g-button icon="left">默认按钮</g-button>
    <g-button icon="right" icon-position="right">默认按钮</g-button>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Button from '../../../src/button'

export default {
  components: {
    'g-button': Button,
  },
  data() {
    return {
      content: `
      <g-button>默认按钮</g-button>
      <g-button icon="setting">默认按钮</g-button>
      <g-button icon="setting" icon-position="right">默认按钮</g-button>
      <g-button :loading="true">默认按钮</g-button>
      <g-button disabled>默认按钮</g-button>
      <g-button icon="left">默认按钮</g-button>
      <g-button icon="right" icon-position="right">默认按钮</g-button>
      `.replace(/\t+| +/g, '').trim()
    }
  }
}
</script>
