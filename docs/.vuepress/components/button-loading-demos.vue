<template>
  <div>
    <p>
      loading 为 true 时会替换掉 icon
    </p>
    <p>
      下面示例：点击切换 icon 和 loading 显示（尝试着点击下看看会发生什么吧）
    </p>
    <g-button :loading="loading1" icon="down" @click="loading1 = !loading1">默认按钮</g-button>
    <g-button :loading="loading2" icon="setting" @click="loading2 = !loading2">默认按钮</g-button>
    <g-button :loading="loading3" icon="setting" icon-position="right" @click="loading3 = !loading3">默认按钮</g-button>
    <p>
      <strong>代码</strong>
    </p>
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
      loading1: false,
      loading2: true,
      loading3: false,
      content: `
        <g-button :loading="loading1" icon="down" @click="loading1 = !loading1">
          默认按钮
        </g-button>
        <g-button :loading="loading2" icon="setting" @click="loading2 = !loading2">
          默认按钮
        </g-button>
        <g-button :loading="loading3" icon="setting" icon-position="right" @click="loading3 = !loading3">
          默认按钮
        </g-button>
      `.replace(/^ {8}/gm, '').trim(),
    }
  }
}
</script>
