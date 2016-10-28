import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,  
  Navigator,
  TouchableOpacity,
  ListView,
  ScrollView,
  BackAndroid,
  ToastAndroid,
  DrawerLayoutAndroid,
  Alert,
} from 'react-native';
import SecondPage from './SecondPage';
import ListViewItem from './ListViewItem';

export default class FirstPage extends Component {
	//初始化listView数据源
	constructor(props){
		super(props);
		_navigator = this.props.navigator;
		const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !==r2});
		this.state = {dataSource:ds.cloneWithRows(['Indicator(指示器)','DrawerLayoutAndroid','Image','土豆','唐家萨斯','诺克萨斯','德玛西亚','泽拉斯'])
		};
	}	
  // 填出提示框
  onPress() {
    alert("我是Spike!");
  }

  /**
   * 跳转页面至SecondPage
   * @param name 传递参数
   * @param type 动画类型
   */
  gotoNext(name, type = 'Normal') {

    this.props.navigator.push({
      component: SecondPage,
      passProps: {
        id: name
      },
      onPress: this.onPress,
      rightText: 'ALERT!',
      type: type
    })
  }

  
  render() {
    // 点击按钮使用Home页面入栈

    return (

	<ScrollView>
	<ListView  
			style={{flex:5,marginTop:30}}
			dataSource={this.state.dataSource}
			renderRow={(rowData)=>			
				<ListViewItem name={rowData}
				navigator = {_navigator}
				/>
			}
		
		/>
      <View style={styles.container}>
	  	
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.gotoNext('第一页')}>
          <Text style={styles.buttonText}>
            {'跳转至第二页(右出)'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.gotoNext('第一页', 'Modal')}>
          <Text style={styles.buttonText}>
            {'跳转至第二页(底部)'}
          </Text>
        </TouchableOpacity>
      </View>
	  
	  </ScrollView>
	
    );
  }
}
var _navigator ;
//添加返回键的监听
BackAndroid.addEventListener('hardwareBackPress', function() {
  if(_navigator == null){

	  ToastAndroid.show("null",ToastAndroid.SHORT);
    return false;
  }
  if(_navigator.getCurrentRoutes().length === 1){

		 ToastAndroid.show("===1",ToastAndroid.SHORT);
    return true;
  }

	 ToastAndroid.show("退出",ToastAndroid.SHORT);
  _navigator.pop();
  return true;
});

var styles = StyleSheet.create({
  // 页面框架
  container: {
    flex: 4,
    marginTop: 5,
    flexDirection: 'column'
  },
 
  // 按钮
  button: {
    height: 60,
    marginTop: 10,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#ff1049',
    alignItems: 'center'
  },
  // 按钮文字
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  },

});