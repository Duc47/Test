import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
/* import { Colors } from 'react-native/Libraries/NewAppScreen'; */
import { images, icons, colors, fontsize } from '../constant';
//import {tinhTong} from '../utilities/fun';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = (props) => {
  const {navigation} = props
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bg}
        source={images.bg}
        esizeMode='cover'>
        <View style={styles.header}>
          <TouchableOpacity
          onPress={()=>navigation.goBack()}>
             <Icon name="arrow-left" style={styles.header_back} />
          </TouchableOpacity>
          <Text style={styles.header_login}>Đăng nhập</Text>
          <Text style={styles.header_cancle}>Hủy</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.content_text0}>Xác thực số điện thoại</Text>
          <Text style={styles.content_text1}>Vui lòng xác thực số điện thoại để mua hàng</Text>
          <TextInput placeholder='Số điện thoại' placeholderTextColor={'#333'} keyboardType='numeric' style={styles.ipphonenumble}></TextInput>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity 
          onPress={()=>navigation.navigate("BottomTab")}
          style={styles.footer_btn}>
            <Text style={styles.footer_text}>Xác nhận</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  header: {
    flex: 0.075,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  header_back: {
    color: '#fff',
    fontSize: 18
  },
  header_login: {
    fontSize: fontsize.title,
    fontWeight: 'bold',
    color: colors.whiteText,
  },
  header_cancle: {
    color: colors.whiteText,
    fontSize: 14,
  },

  content: {
    flex: 0.7,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  content_text0: {
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    fontSize: 16
  },
  content_text1: {
    color: '#333',
    fontSize: 14
  },
  ipphonenumble: {
    height: 50,
    width: '90%',
    borderColor: '#333',
    color:'#333',
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 20,
    padding: 10,
  },
  footer: {
    flex: 0.225,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
  },
  footer_btn: {
    width:'90%',
    height:45,
    backgroundColor:colors.primary,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  footer_text: {
    fontSize: fontsize.normalText,
    fontWeight:'bold',
    color:colors.whiteText
  },
});

export default Login;