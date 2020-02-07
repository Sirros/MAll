import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://httpbin.org/user-agent',
    timeout: 5000
  })

  // 真正的网络请求
  // axios 会返回一个 Promise 
  return instance
}

// 调用方法
// request({
//   url: ""
// })
// .then(res=>{

// })
// .catch(err=>{

// })
