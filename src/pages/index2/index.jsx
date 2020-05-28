import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

class Index extends Component {

  config = {
    navigationBarTitleText: '实名认证2'
  }

  componentDidMount() {
  }
  componentWillReceiveProps(nextProps) {
  }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }

  render() {
    return (
      <View>
        index2
      </View>
    )
  }
}

export default Index
