/**
 * Created by wangchenlong on 16/4/17.
 */
'use strict'; // �����ϸ�ģʽ

var React = require('react-native'); // ����React��

var {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
  } = React; // ʹ�ü�д

// ʹ��Component�ĺô���, �����Զ�����ע��
class FirstPage extends Component {
  // �����ʾ��
  onPress() {
    alert("����Spike!");
  }

  /**
   * ��תҳ����SecondPage
   * @param name ���ݲ���
   * @param type ��������
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
    // �����ťʹ��Homeҳ����ջ
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.gotoNext('��һҳ')}>
          <Text style={styles.buttonText}>
            {'��ת���ڶ�ҳ(�ҳ�)'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.gotoNext('��һҳ', 'Modal')}>
          <Text style={styles.buttonText}>
            {'��ת���ڶ�ҳ(�ײ�)'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

/**
 * �ڶ�ҳ
 */
class SecondPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigator.pop()}>
          <Text style={styles.buttonText}>
            ������һҳ, ��Դ: {this.props.id}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// ��������Mapper
var NavigationBarRouteMapper = {
  // ���
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <View style={styles.navContainer}>
          <TouchableOpacity
            underlayColor='transparent'
            onPress={() => {if (index > 0) {navigator.pop()}}}>
            <Text style={styles.leftNavButtonText}>
              ����
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  },
  // �Ҽ�
  RightButton(route, navigator, index, navState) {
    if (route.onPress)
      return (
        <View style={styles.navContainer}>
          <TouchableOpacity
            onPress={() => route.onPress()}>
            <Text style={styles.rightNavButtonText}>
              {route.rightText || '�Ҽ�'}
            </Text>
          </TouchableOpacity>
        </View>
      );
  },
  // ����
  Title(route, navigator, index, navState) {
    return (
      <View style={styles.navContainer}>
        <Text style={styles.title}>
          Ӧ�ñ���
        </Text>
      </View>
    );
  }
};

// ��ģ��
class UniformView extends Component {
  /**
   * ʹ�ö�̬ҳ�����
   * @param route ·��
   * @param navigator ������
   * @returns {XML} ҳ��
   */
  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{name: 'FirstPage', component: FirstPage}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navContainer}
            routeMapper={NavigationBarRouteMapper}/>}
        />
    );
  }
}

var styles = StyleSheet.create({
  // ҳ����
  container: {
    flex: 4,
    marginTop: 100,
    flexDirection: 'column'
  },
  // ������
  navContainer: {
    backgroundColor: '#81c04d',
    paddingTop: 12,
    paddingBottom: 10,
  },
  // ����������
  headText: {
    color: '#ffffff',
    fontSize: 22
  },
  // ��ť
  button: {
    height: 60,
    marginTop: 10,
    justifyContent: 'center', // ���ݾ�����ʾ
    backgroundColor: '#ff1049',
    alignItems: 'center'
  },
  // ��ť����
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  },
  // ���浼����ť
  leftNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 13
  },
  // ���浼����ť
  rightNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 13
  },
  // ����
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1                //Step 3
  }
});

module.exports = UniformView; // ����ģ��