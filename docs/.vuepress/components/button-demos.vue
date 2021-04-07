<template>
  <div>
    <h3>预览：</h3>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">默认按钮</g-button>
    <g-button icon="setting" icon-position="right">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <h3>代码：</h3>
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
      `.replace(/\t+| +/g, '').trim()
    }
  }
}
</script>
