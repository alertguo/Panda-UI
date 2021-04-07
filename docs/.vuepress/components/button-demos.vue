<template>
  <div>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="panda">熊猫按钮</g-button>
    <g-button icon="setting">设置按钮</g-button>
    <g-button icon="thumbs-up" icon-position="right">点赞按钮</g-button>
    <g-button icon="download">下载按钮</g-button>
    <g-button disabled>禁用按钮</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{ content }}</code></pre>


  </div>
</template>
<script>
import Button from '../../../src/button'
import ButtonGroup from "../../../src/button-group"

export default {
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup,
  },
  data() {
    return {
      content: `
        <g-button>默认按钮</g-button>
        <g-button icon="setting">默认按钮</g-button>
        <g-button icon="setting" icon-position="right">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
      `.replace(/^ {8}/gm, '').trim(),
    }
  }
}
</script>
