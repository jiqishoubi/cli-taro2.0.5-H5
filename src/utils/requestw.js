import Taro from '@tarojs/taro'
import { globalHost } from './utils'

const requestw = async ({
  type = 'post',
  url,
  data = {},
}) => {
  //url
  let url2 = url.indexOf('http') > -1 ? url : globalHost() + url

  let res = await Taro.request({
    method: type,
    url: url2,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded', //要不然后台接收不到数据
    },
    mode: 'cors', //允许跨域
    timeout: 6000,
  })
  if (!res || res.statusCode !== 200) { //网络没走通
    Taro.showToast({
      title: '网络异常，请稍候再试',
      icon: 'none',
      mask: false,
    })
    return null
  }

  return res.data
}

export default requestw
