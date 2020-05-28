import Taro, { Component } from '@tarojs/taro'
//组件
import { View, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import styles from './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '实名认证'
  }
  state = {
    str: ''
  }

  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }

  goIndex2 = () => { }

  render() {
    return (
      <View className={styles.index}>
        index
        <Button onClick={this.goIndex2}>go</Button>
        <View>{this.state.str}</View>
        <AtButton type='primary'>ui</AtButton>
      </View>
    )
  }
}

export default Index
