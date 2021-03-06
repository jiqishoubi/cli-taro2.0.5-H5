import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import 'taro-ui/dist/style/index.scss' // taro-ui样式
import './app.less'

import { setIsProd } from './utils/utils'
import { wechatConfig } from './utils/utils_wx'

import Index from './pages/index/index'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  //项目配置
  config = {
    window: {
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '便利电',
    },
    pages: [
      'pages/index/index',
      'pages/index2/index'
    ]
    // tabBar: {
    //   color: "#999",
    //   selectedColor: "red",
    //   backgroundColor: "#fff",
    //   borderStyle: "black",
    //   list: [
    //     {
    //       pagePath: "/pages/index/index",
    //       text: "名片",
    //       iconPath: '/assets/tabbar/icon1.png',
    //       selectedIconPath: '/assets/tabbar/icon1_active.png',
    //     }, {
    //       pagePath: "/pages/index2/index",
    //       text: "产品",
    //       iconPath: '/assets/tabbar/icon2.png',
    //       selectedIconPath: '/assets/tabbar/icon2_active.png',
    //     }
    //   ]
    // }
  }
  //项目配置 end

  async componentDidMount() {
    console.log('app didMount')
    // //微信jssdk
    // await wechatConfig()

    //isProd
    setIsProd()
  }
  componentDidShow() {
    console.log('app didShow')
  }
  componentDidHide() { }
  componentDidCatchError() { }

  /**
   * 方法
   */

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
