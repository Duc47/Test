import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
/* import { Colors } from 'react-native/Libraries/NewAppScreen'; */
import { images, icons, colors, fontsize } from '../constant';
//import {tinhTong} from '../utilities/fun';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Discount = (props) => {
  const {navigation} = props
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
          onPress={()=>navigation.goBack()}>
             <Icon name="arrow-left" style={styles.header_back} />
          </TouchableOpacity>
          <Text style={styles.header_login}>Khuyến mãi</Text>
        </View>
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
    color: colors.whiteText,
    fontSize: 18
  },
  header_login: {
    fontSize: fontsize.title,
    fontWeight: 'bold',
    color: colors.whiteText,
  },
});

export default Discount;