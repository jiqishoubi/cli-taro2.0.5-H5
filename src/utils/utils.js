import { get as getGlobalData, set as setGlobalData } from './globalData'
import { hostObj, prodHostArr } from './conts'

/**
 * 获取请求域名
 */
export const globalHost = () => {
  return getGlobalData('isProd') ? hostObj.prod : hostObj.dev
}

/**
 * 取得url参数
 */
export const getUrlParam = (key) => {
  let url = window.location.href
  if (url.indexOf(key + '=') > -1) {
    let strBack = url.split(key + '=')[1] //key=后面的str
    if (strBack.indexOf('&') > -1) { //后面还有参数
      let value = strBack.split('&')[0]
      return value
    } else { //后面没参数了
      return strBack
    }
  } else {
    return null
  }
}

/**
 * 设置isProd
 */
export const setIsProd = () => {
  let url = window.location.href
  let isProd = false
  for (let i = 0; i < prodHostArr.length; i++) {
    if (url.indexOf(prodHostArr[i]) > -1) {
      isProd = true
      break
    }
  }
  setGlobalData('isProd', isProd)
}