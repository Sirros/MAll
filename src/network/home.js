import {request} from './request'

// 封装方法
export function getHomeMultiData(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeTotalGoodsData(type, page){
  return request({
    url: '/home/data',
    params:{  
      type,
      page
    }
  })
}