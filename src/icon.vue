<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
import './svg'
export default {
  name: 'GuluIcon',
  props: ['name']
}
</script>
<style lang="scss" scoped>
//i-panda 熊猫头
//i-loading 加载
//i-download  下载
//i-setting 设置
//i-down 下
//i-left 左
//i-thumbs-up 点赞
//i-right 右
.g-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
