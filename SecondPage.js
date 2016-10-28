import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,  
  Navigator,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const {width,height} = Dimensions.get('window');
export default class SecondPage extends Component {
	constructor(props){
	  super(props);
	 this.state = {
		 size:{width,height},
	 };
  }
  
  _onLayoutDidChange = (e)=>{
	  
	  const layout = e.nativeEvent.layout;
	  this.setState({
		  size:{width:layout.width , height:layout.height}
	  });
  }
  
 render() {
    return (
	<ScrollView style={{flex:1}}>
	<View style={{ flex: 6}} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
          <Image source={{uri:'http://pic9.nipic.com/20100906/1295091_134639124058_2.jpg'}}
			style={[{ backgroundColor: 'red' }, this.state.size]}
			><Text>1</Text></Image>
          <Image source={{uri:'http://e.hiphotos.baidu.com/image/pic/item/a9d3fd1f4134970a3c49833996cad1c8a7865de9.jpg'}}
			style={[{ backgroundColor: 'red' }, this.state.size]}
			><Text>1</Text></Image>
		  <Image source={{uri:'http://e.hiphotos.baidu.com/image/pic/item/3b87e950352ac65cc48cda64f8f2b21193138a18.jpg'}}
			style={[{ backgroundColor: 'red' }, this.state.size]}
			><Text>1</Text></Image>
        </Carousel>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{
			this.props.navigator.pop();
		  }}>
          <Text style={styles.buttonText}>
            返回上一页, 来源: {this.props.id}
          </Text>
        </TouchableOpacity>
      </View>
	  
	  </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  // 页面框架
  container: {
    flex: 1,
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