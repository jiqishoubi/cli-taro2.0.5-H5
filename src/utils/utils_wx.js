import { wechatHost, appid } from './conts'
import { getUrlParam } from './utils'
import requestw from './requestw'
import allApiStr from './allApiStr'

/**
 * 配置微信jssdk
 */
export const wechatConfig = () => {
  return new Promise(async (resolve) => {
    // //如果需要微信登录code 打开注释
    // let code = getUrlParam('code')
    // if (!code) {
    //   let redirect_uri = window.location.href
    //   window.location.href = `
    //     https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect
    //   `
    //   return
    // }

    //出口
    //先绑定wx监听
    window.wx.ready(function (e) {
      //一些wx js接口的配置写在这里。。。
      //
      resolve(e)
    })
    window.wx.error(function (err) {
      resolve(err)
    })
    //先绑定wx监听 end

    //调用ajax
    let url = window.location.href
    let res = await requestw({
      url: wechatHost + allApiStr.wechatConfigApi,
      data: { url }
    })
    console.log('weixinconfig', res)

    if (!res || res.code !== 200) {
      let urlCode = window.location.href
      let url2 = urlCode.split('&code')[0]
      window.location.href = url2
      return
    }

    //wx config
    let param = res.data
    window.wx.config({
      // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: param.appId, // 必填，公众号的唯一标识
      timestamp: param.timestamp, // 必填，生成签名的时间戳
      nonceStr: param.nonceStr, // 必填，生成签名的随机串
      signature: param.signature, // 必填，签名
      jsApiList: [
        // 分享
        // "updateAppMessageShareData", //分享给朋友
        // "updateTimelineShareData", //分享到朋友圈
        // 图片
        'chooseImage', //选取图片
        'previewImage', //预览图片
        'uploadImage', //上传图片
        // 'downloadImage', //下载图片
        // 位置
        // 'openLocation', //打开地图
        // 'getLocation', //获取地理位置
        'scanQRCode' //微信扫一扫
        // 'getNetworkType', //获取网络状态
        // 'chooseWXPay', //发起微信支付
      ],
    })
  })
}

/**
 * 微信扫码
 */
export const wxScanQRCode = () => {
  return new Promise((resolve) => {
    window.wx.scanQRCode({
      needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        // var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        resolve(res)
      },
      fail: function (err) {
        resolve(err)
      }
    })
  })
}
