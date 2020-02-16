import axios from 'axios'

export function request(config) {
  // 1.创建实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/hy',
    timeout: 7000
  })

  // 2.拦截器
  // 2.1请求拦截器
  instance.interceptors.request.use(config =>{
    // console.log(config)
    // 拦截成功要返回数据
    return config
  }, err=>{
    console.log("请求拦截失败")
  })

  // 2.2响应拦截器
  instance.interceptors.response.use(res=>{
    // console.log(res)
    // 拦截成功要返回数据
    return res.data
  }, err=>{
    console.log("响应拦截失败")
  })

  // 3.真正的网络请求
  // axios 会返回一个 Promise 
  return instance(config)
}

// 调用方法
// request({
//   url: ""
// })
// .then(res=>{

// })
// .catch(err=>{

// })
