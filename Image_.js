import React ,{Component} from 'react';

import  {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
/*
Image，一个图片显示组件，

*/

export default class  Image_  extends Component{
	
	constructor(props){
		super(props);
		
	}
	
	render(){
		return (
		
		<View style={styles.container}>
			<View style={styles.containerImage}>
				<Image 
				source={{uri:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2599072350,2144391698&fm=58'}}
				style = {styles.imageView}
				/>
		
				<Text style={styles.textView}>美食</Text>
			</View>
			
			<View style={styles.containerImage}>
				<Image 
				source={{uri:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2599072350,2144391698&fm=58'}}
				style = {styles.imageView}
				/>
		
				<Text style={styles.textView}>美食</Text>
			</View>
			
			<View style={styles.containerImage}>
				<Image 
				source={{uri:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2599072350,2144391698&fm=58'}}
				style = {styles.imageView}
				/>
		
				<Text style={styles.textView}>美食</Text>
			</View>
			
			<View style={styles.containerImage}>
				<Image 
				style = {styles.imageView}
				source={{uri:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2599072350,2144391698&fm=58'}}
				
				/>
		
				<Text style={styles.textView}>美食</Text>
			</View>
			
			<View style={styles.containerImage}>
				<Image 
				source={{uri:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2599072350,2144391698&fm=58'}}
				style = {styles.imageView}
				/>
		
				<Text style={styles.textView}>美食</Text>
			</View>
		</View>
		
		);
		
	}
	
}

const styles = StyleSheet.create({

	containerImage:{
		flex:1,
	},
	container:{
		flexDirection:'row',
		marginTop:80,
	},
	imageView:{
		width:45,
		height:45,
		alignSelf:'center',
	},
	textView:{
		marginTop:5,
		alignSelf:'center',
		fontSize:13,
		color:'#555555',
		textAlign:'center',
	}
	
	
	
});