import React, { useState, useEffect } from 'react';
import { Text, Image, StyleSheet, SafeAreaView, View, ScrollView, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
/* import { Colors } from 'react-native/Libraries/NewAppScreen'; */
import { images, icons, colors, fontsize } from '../constant';
//import {tinhTong} from '../utilities/fun';
import Icon from 'react-native-vector-icons/FontAwesome5';
const { width } = Dimensions.get('window');
const ProductDetail = (props) => {
    const { navigation, route } = props
    const [price, setPrice] = useState(route.params.price)
    const [number, setNumber] = useState(1)
    const [rating, setRating] = useState(0);

    useEffect(()=>{
        setPrice(number*route.params.price)
    },[number])
    const handleRating = (value) => {
        setRating(value);
    }
    const handleNumberPlus = () => {
        setNumber(number + 1)

    }
    const handleNumberSub = () => {
        if (number > 0) {
            setNumber(number - 1)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.btnIcon}
                    onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" style={styles.back_Icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnIcon}>
                    <Image
                        style={styles.shoppingCart_Icon}
                        resizeMode={'contain'}
                        source={icons.cart}
                    />
                    <Text style={styles.quantity}>12</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.content}>
                <Image
                    style={styles.productImg}
                    resizeMode='cover'
                    source={{ uri: route.params.uri }}
                />
                <Text umberOfLines={2} style={styles.productName}>{route.params.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <TouchableOpacity key={item} onPress={() => handleRating(item)}>
                            <Icon
                                name={"star"}
                                size={20}
                                color={rating >= item ? '#FFD700' : '#D3D3D3'}
                                style={{ marginRight: 5 }}
                            />
                        </TouchableOpacity>
                    ))}
                    <Text style={{ marginLeft: 5 }}>{rating}</Text>
                </View>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>{route.params.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.btnshareAndHeart}>
                            <Icon name="heart" style={styles.iconsaveAndHeart} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnshareAndHeart}>
                            <Icon name="share" style={styles.iconsaveAndHeart} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.originalPrice}>{route.params.sale.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                <Text style={styles.info}>Thông tin sản phẩm:</Text>
                <Text style={styles.infoContent}>{route.params.descrt}</Text>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={handleNumberSub}
                    style={styles.btnaddSub} >
                    <Icon name="minus" style={styles.iconAddAndSub} />
                </TouchableOpacity>
                <Text style={styles.numberOfProduct}>{number}</Text>
                <TouchableOpacity
                    onPress={handleNumberPlus}
                    style={styles.btnaddSub} >
                    <Icon name="plus" style={styles.iconAddAndSub} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAddToCart}>
                    <Text style={styles.btnPrice}>{price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                    <Text style={styles.btnText}>THÊM VÀO GIỎ HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 62,
        backgroundColor: '#ffffff'
    },
    header: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    back_Icon: {
        color: colors.whiteText,
        fontSize: 22,
    },
    btnIcon: {
        padding: 17,
    },
    shoppingCart_Icon: {
        width: 25,
        height: 25,
        tintColor: colors.whiteText
    },
    quantity: {
        backgroundColor: 'red',
        width: 14,
        height: 14,
        borderRadius: 7,
        textAlign: 'center',
        color: colors.whiteText,
        position: 'absolute',
        top: 12,
        right: 17,
        fontSize: 10
    },
    content: {
        padding: 7,
    },
    productImg: {
        width: (width / 2 + 10),
        height: (width / 2 + 10),
        alignSelf: 'center',
        margin: 20
    },
    productName: {
        fontSize: fontsize.title,
        fontWeight: 'bold',
        color: colors.text
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        fontSize: fontsize.largeText,
        color: colors.primary,
        fontWeight: 'bold'
    },
    originalPrice: {
        fontSize: fontsize.normalText,
        textDecorationLine: 'line-through',
        color: colors.placeholder
    },
    iconsaveAndHeart: {
        fontSize: fontsize.largeText,
        padding: 5,
    },
    btnshareAndHeart: {
        margin: 2,
        padding: 4
    },
    info:{
        color:colors.text,
        fontWeight:'bold',
        fontSize:fontsize.largeText,
    },
    infoContent:{
        color:colors.text,
        fontSize:fontsize.normalText
    },
    footer: {
        height: 65,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7
    },
    btnAddToCart: {
        flex: 1,
        backgroundColor: colors.primary,
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    btnaddSub: {
        height: 34,
        width: 34,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 17,
        borderColor: colors.primary
    },
    btnPrice: {
        fontSize: fontsize.largeText,
        fontWeight: 'bold',
        color: colors.whiteText
    },
    btnText: {
        fontSize: fontsize.normalText,
        color: colors.whiteText,
    },
    iconAddAndSub: {
        fontSize: fontsize.largeText,
        color: colors.primary,
    },
    numberOfProduct: {
        fontSize: fontsize.largeText,
        fontWeight: 'bold',
        marginHorizontal: 5,
        color: colors.text
    }
});

export default ProductDetail;