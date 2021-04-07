<template>
  <div>
    <h2>基本用法</h2>
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
    <pre><code>{{ content1 }}</code></pre>

    <h2>loading 用法</h2>
    <p>
      loading 为 true 时会替换掉 icon
    </p>
    <p>
      下面示例：点击切换 icon 和 loading 显示
    </p>
    <g-button :loading="loading1" icon="down" @click="loading1 = !loading1">默认按钮</g-button>
    <g-button :loading="loading2" icon="setting" @click="loading2 = !loading2">默认按钮</g-button>
    <g-button :loading="loading3" icon="setting" icon-position="right" @click="loading3 = !loading3">默认按钮</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{ content2 }}</code></pre>

    <h2>图标组合用法</h2>
    <g-button-group>
      <g-button icon="left">后退</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">前进</g-button>
    </g-button-group>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{ content3 }}</code></pre>

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
      loading1: false,
      loading2: true,
      loading3: false,
      content1: `
        <g-button>默认按钮</g-button>
        <g-button icon="setting">默认按钮</g-button>
        <g-button icon="setting" icon-position="right">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
      `.replace(/^ {8}/gm, '').trim(),
      content2: `
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
      content3: `
        <g-button-group>
          <g-button icon="left">后退</g-button>
          <g-button>更多</g-button>
          <g-button icon="right" icon-position="right">前进</g-button>
        </g-button-group>
      `.replace(/^ {8}/gm, '').trim(),
    }
  }
}
</script>
