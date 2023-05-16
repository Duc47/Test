import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View, ImageBackground, TextInput, TouchableOpacity, FlatList } from 'react-native';
/* import { Colors } from 'react-native/Libraries/NewAppScreen'; */
import { images, icons, colors, fontsize } from '../constant';
//import {tinhTong} from '../utilities/fun';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ProductItemHz } from '../components';
import { ProductData } from '../constant/Data';
const Search = (props) => {
    const { navigation } = props
    const [text, setText] = useState('')
    const handleData =()=>ProductData.filter(item=>item.name.toLowerCase().includes(text.toLowerCase()))

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    style={styles.btnBack}
                    onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" style={styles.iconBack} />
                </TouchableOpacity>
                <Icon name="search" style={styles.seach_icon} />
                <TextInput
                    onChangeText={text=>{setText(text)}}
                    style={styles.input}
                    placeholder={'Hôm nay bạn muốn mua gì?'}
                    placeholderTextColor={colors.placeholder}
                    autoFocus={true}
                />
            </View>
            <View style={styles.FlatList}>
                {text.length>0?handleData().length>0?<FlatList
                    data={handleData()}
                    renderItem={({ item }) => <ProductItemHz
                        onPress={() => navigation.navigate('ProductDetail', {
                            discount: item.discount,
                            name: item.name,
                            price: item.price,
                            sale: item.sale,
                            uri: item.uri,
                            descrt: item.description
                        })}
                        displayTrash={'none'}
                        discount={item.discount}
                        name={item.name}
                        price={item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        sale={item.sale.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        uri={item.uri} />}
                    keyExtractor={item => item.name}
                    scrollEnabled={false}
                />:<Text style={{color:colors.text, fontSize:fontsize.largeText}}>Xin lỗi, có vẻ như chúng tôi không có sản phẩm này!</Text>:
                <View>
                    <Text style={{color:colors.text,fontSize:fontsize.largeText}}>Nhập từ khóa để tìm kiếm</Text>
                    </View>}
                
                
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        height: 62,
        alignItems: 'center',
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        paddingLeft: 40,
        backgroundColor: colors.whiteText,
        fontSize: fontsize.largeText * 0.9,
        color: colors.text
    },
    seach_icon: {
        fontSize: 20,
        color: colors.primary,
        position: 'absolute',
        top: 19,
        left: 65,
        zIndex: 1
    },
    btnBack: {
        padding: 15
    },
    iconBack: {
        color: colors.whiteText,
        fontSize: 18
    },
    FlatList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Search;