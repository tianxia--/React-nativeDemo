import React,{Component} from 'react';

import {
	View,
	Image,
	TouchableHighlight,
	Text,
	StyleSheet,
	ToastAndroid,
	Navigator,
}from 'react-native';
import Toast from 'react-native-root-toast';
import Indicator from './Indicator';
import SecondPage from './SecondPage';	
import DrawerLayout from './DrawerLayout';	
import Image_ from './Image_';
export default class ListViewItem  extends Component{
	constructor(props){
		super(props);
		this.navigator = this.props.navigator;
		this.name = this.props.name;
		console.warn(this.navigator);
	}
	getMoviesFromApiAsync() {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((respons) =>respons.json())
      .then((responseJson) => {
		ToastAndroid.show(responseJson.title, ToastAndroid.SHORT);
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  	/**
   * 跳转页面至SecondPage
   * @param name 传递参数
   * @param type 动画类型
   */
  gotoNext(name, type = 'Normal') {
	  
	if(name.indexOf("Indicator")>-1){
		this.navigator.push({
		component: Indicator,
    });
	}else if(name.indexOf("DrawerLayout") > -1){
		this.navigator.push({
			component:DrawerLayout,
		});
	}else if(name.indexOf("Image") > -1){
		this.navigator.push({
			component:Image_,
		});
	}else{
		ToastAndroid.show('还没有实现相应的功能',ToastAndroid.SHORT);
	}
    
  }
	render(){
		return(
		<View  style={styles.row}>
			 <TouchableHighlight
						style={styles.buttonStyle}
						onPress={()=>this.getMoviesFromApiAsync()}>
						<Image  source={{uri:'http://pic9.nipic.com/20100906/1295091_134639124058_2.jpg'}}
							style={styles.image}
						/>
				   </TouchableHighlight>
			 <TouchableHighlight
						style={styles.listItemStyle}
						onPress={() => this.gotoNext(this.name)}>
			<View style={styles.column}>
				 <Text style = {styles.title}>Hello_____!{this.props.name}</Text>
				 <Text style = {styles.subtitle}>
					 {this.name}
				</Text>
			</View>
			 </TouchableHighlight>
		</View>
		);
		
	}
	
}

let toast;
const toastShort = (content)=>{
	if(toast !== null){
		if(toast !==undefined){
			Toast.hide(toast);
		}
		
		toast = Toast.show(content.toString(),{
			duration:Toast.durations.SHORT,
		position:Toast.positions.CENTER,
		shadow:true,
		animation:true,
		hideOnPress:true,
		delay:0
			
		});
		
	}
	

	
};



const styles = StyleSheet.create({
	row:{
		flex:1,
		flexDirection:'row',
		margin:20,
	},
	column:{
		flex:1,
		flexDirection:'column',
	},
	 buttonStyle:{
	  marginTop:15,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'#63B8FF',
      height:35,
      borderRadius:5,
      justifyContent: 'center',
      alignItems: 'center',
  },
    listItemStyle:{
	  marginTop:15,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'#63B8FF',
      flex:1,
      borderRadius:5,
      justifyContent: 'center',
      alignItems: 'center',
  },
 text:{
	  flex:1,
	  justifyContent:'center',
  },
  title:{
	  fontSize:17,
	  fontWeight:'bold',
	  
  },
  subtitle:{
	  fontSize:10,
  },
  image: { width: 40, height: 40, marginRight: 10 },
	
});