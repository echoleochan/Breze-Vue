import axios from '@/utils/http/axios'

export default{
  // TODO 获取轮播图
  getBannerInfo(){
    return axios({
      url: '/banner/select',
      method: 'get'
    })
  },
  //TODO 分类数据获取
  getNotifyInfo(params){
    return axios({
      url: '/notify/select',
      method: 'get',
      params: params
    })
  },
  getNewsInfo(params){
    return axios({
      url: '/news/select',
      method: 'get',
      params: params
    })
  },
  getPresenceInfo(params){
    return axios({
      url: '/presence/select',
      method: 'get',
      params: params
    })
  },
  getThoughtInfo(params){
    return axios({
      url: '/thought/select',
      method: 'get',
      params: params
    })
  },

}