import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  }
})

// 单元测试
import chai from 'chai'
const expect = chai.expect
// 测 setting
{
  // 将 Button 组件变成一个构造函数
  const Constructor = Vue.extend(Button)
  // 构造函数弄成实例
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  // 实例挂载到 #test 上面
  vm.$mount()
  // 找到button里icon的use
  let useElement = vm.$el.querySelector('use')
  // 断言use的 xlink:href 属性为 #i-setting
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}
// 测 loading true/false
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
// 测 order 1/2
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
// 测 iconPosition right/left
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
// 测 click
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
    }
  })
  vm.$mount()
  vm.$on('click',function(){
    expect(1).to.eq(1)
  })
  let button = vm.$el
  button.click()
  vm.$el.remove()
  vm.$destroy()
}
