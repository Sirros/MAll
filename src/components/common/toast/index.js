import Toast from './Toast'

const obj = {}

// Vue 是自带的参数
obj.install = (Vue)=>{
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  
  // 2.对组建构造器 new，可以创建一个组件对象
  const toast = new toastConstructor()

  // 3.将对象手动挂载到某一元素上，例如 div
  toast.$mount(document.createElement('div'))

  // 4.将对象放到 body 上渲染
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}
export default obj
