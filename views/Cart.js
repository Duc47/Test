import React, { useState, useEffect } from 'react';
import { Text,FlatList, StyleSheet, SafeAreaView, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
/* import { Colors } from 'react-native/Libraries/NewAppScreen'; */
import { images, icons, colors, fontsize } from '../constant';
//import {tinhTong} from '../utilities/fun';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ProductItemHz } from '../components';
import { ProductData } from '../constant/Data';
const Cart = (props) => {
  const { navigation } = props
  const [totalOfMoney, setTotalOfMoney] = useState(8000000)
  useEffect(()=>{
    const sum = ProductData.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
    setTotalOfMoney(sum)
  },[])
 
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.header_login}>Giỏ hàng của bạn</Text>
        <View></View>
      </View>
      <View style={styles.content}>
      <View style={styles.FlatList}>
                  <FlatList
                    data={ProductData}
                    renderItem={({ item }) => <ProductItemHz
                        onPress={() => navigation.navigate('ProductDetail', {
                            discount: item.discount,
                            name: item.name,
                            price: item.price,
                            sale: item.sale,
                            uri: item.uri,
                            descrt: item.description
                        })}
                        discount={item.discount}
                        name={item.name}
                        price={item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        sale={item.sale.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        uri={item.uri} />}
                    keyExtractor={item => item.name}
                    scrollEnabled={false}
                />
                
                
            </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footer_money}>
          <Text style={styles.totalOfMoney}>Tổng tiền</Text>
          <Text style={styles.money}>{totalOfMoney.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
        </View>

        <TouchableOpacity style={styles.btnAddToCart}>
          <Text style={styles.btnText}>ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  header_login: {
    fontSize: fontsize.title,
    fontWeight: 'bold',
    color: colors.whiteText,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.primary
  },
  footer_money: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  totalOfMoney: {
    fontSize: fontsize.normalText,
    color: colors.text
  },
  money: {
    fontSize: fontsize.title,
    fontWeight: 'bold',
    color: colors.primary
  },
  btnAddToCart: {
    flex: 1,
    margin: 15,
    backgroundColor: colors.primary,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  btnText: {
    fontSize: fontsize.normalText,
    color: colors.whiteText,
    fontWeight: 'bold'
  },
  btnBack: {
    padding: 15
  },
  iconBack: {
    color: colors.whiteText,
    fontSize: 18
  },
});

export default Cart;