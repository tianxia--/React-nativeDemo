import React ,{Component} from 'react';

import  {
	StyleSheet,
	Text,
	View,
	DrawerLayoutAndroid,
	TouchableOpacity,
} from 'react-native';
/*
抽屉（通常用于导航切换）是通过renderNavigationView方法渲染的，并且
DrawerLayoutAndroid的直接子视图会成为主视图（用于放置你的内容）。导航视图一
开始在屏幕上并不可见，不过可以从drawerPosition指定的窗口侧面拖拽出来，
并且抽屉的宽度可以使用drawerWidth属性来指定。
*/
var drawer;
export default class  DrawerLayout  extends Component{
	
	constructor(props){
		super(props);
		
	}
	closeDrawer(){
		console.warn(this.drawer);
		this.drawer.closeDrawer();
	}
	
	render(){
	 var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
		<TouchableOpacity 
				style={styles.btn}
				onPress={this.closeDrawer}
				>
			<Text style={{ fontSize: 15, textAlign: 'left'}}>drawlayout</Text>
		</TouchableOpacity>
      
    </View>
  );
		
		return (
		<DrawerLayoutAndroid 
			drawerWidth={200}
			drawerPosition={DrawerLayoutAndroid.positions.left}
			ref={(drawer)=>{this.drawer = drawer;}}
			renderNavigationView ={()=>navigationView}
			
		>
			<View style={styles.container}>
			
				<Text style={{margin:10,fontSize:25,textAlign:'right'}}>你好</Text>
				<Text style={{margin:10,fontSize:25}}>这是一个测试,出现抽屉需要你根据设置的位置，先按下，
				等到出现那个界面的时候，拖动就可以看到了。

				</Text>
			</View>
		</DrawerLayoutAndroid>
		);
		
	}
	
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#F5FCFF',
	},	
	btn:{
		marginTop:80,
		width:150,
		height:40,
		backgroundColor:'#3BC1FF',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:4,
	},
});