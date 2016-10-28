import React ,{Component} from 'react';

import  {
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native';
/*
这个指示器类似一个不停旋转的进度条，使用也很简单
<ActivityIndicator
				animating = {this.state.animating}
				style={[styles.centering,{height:80}]}
				size="small"
			/>
animating 是用来控制他的显示还是隐藏的
style 控制样式
size 控制他显示的大小
*/
export default class  Indicator  extends Component{
	constructor(props){
		super(props);
		this.state={
			animating: true,
			
		};
	}
	/*
	用来设置animating 的状态
	*/
	showOrHide(){
		if(this.state.animating){
			this.setState({
				animating:false
			});
			
		}else{
			this.setState({
				animating:true
			});
		}
		
	}
	render(){
		return (
		<View  style={styles.container}>
			<TouchableOpacity  style={styles.btn}  
			underlayColor="#fff" 
			onPress={ 
				this.showOrHide.bind(this)
			}
			>
			<Text style={{color:'#fff',fontSize:20}}>'显示/隐藏'</Text>
			</TouchableOpacity>
			
			<ActivityIndicator
				animating = {this.state.animating}
				style={[styles.centering,{height:80}]}
				size="small"
			/>
			
			<ActivityIndicator
				animating={this.state.animating}
				style={[styles.centering,{height:180}]}
				size="large"
			/>
		</View>
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
	
	centering:{
		alignItems:'center',
		justifyContent:'center',
		padding:8,
	},
	btn:{
		marginTop:10,
		width:150,
		height:40,
		backgroundColor:'#3BC1FF',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:4,
	},
	
	
	
	
});