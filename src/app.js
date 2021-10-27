import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)
Vue.component('g-input',Input)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  }
})


// 下面为按钮组件的测试代码

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
//
// const expect = chai.expect
// try {
// // 单元测试
//
//   // 测试按钮含有 icon
//   {
//     // 将 Button 组件变成一个构造函数
//     const Constructor = Vue.extend(Button)
//     // 构造函数弄成实例
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting'
//       }
//     })
//     // 实例挂载到 #test 上面
//     vm.$mount()
//     // 找到button里icon的use
//     let useElement = vm.$el.querySelector('use')
//     // 断言use的 xlink:href 属性为 #i-setting
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   // 测 loading true/false
//   {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//         loading: true
//       }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   // 测 order 1/2
//   {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting'
//       }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   // 测 iconPosition right/left
//   {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//         iconPosition: 'right'
//       }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   // 测 click
//   {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//       }
//     })
//     vm.$mount()
//     // 创建一个 spy 来判断该 function 是否被调用
//     let spy = chai.spy(function () {})
//     vm.$on('click', spy)
//     let button = vm.$el
//     button.click()
//     // 判断 spy 是否被调用
//     expect(spy).to.have.been.called()
//     vm.$el.remove()
//     vm.$destroy()
//   }
// } catch (error) {
//   window.errors = [error]
// } finally {
//   //  errors 存在就全部打出来
//   window.errors && window.errors.forEach((error)=>{
//     console.error(error.message)
//   })
// }
