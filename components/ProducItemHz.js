import { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, Alert } from "react-native";
import { colors, fontsize } from "../constant";
import Icon from 'react-native-vector-icons/FontAwesome5';
const { width } = Dimensions.get('window');
const ProductItemHz = (props) => {
    const { discount, name, price, sale, uri, onPress, displayTrash } = props
    const [addToCart, setAddtoCart] = useState(null)
    const [number, setNumber] = useState(1)
    const handleAddToCart = () => {
        setNumber(1)
        setAddtoCart(true)
    }
    const handleNumberPlus = () => {
        setNumber(number + 1)

    }
    useEffect(()=>{
        if(number < 1){
            setAddtoCart(null)
        }
    },[number])
    const handleNumberSub = () => {
        if (number > 0) {
            setNumber(number - 1)
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.info} >
                <View style={styles.leftPath}>
                    <Text style={styles.discount}>{discount}</Text>
                    <Image
                        style={styles.img}
                        source={{ uri: uri }}
                    />
                </View>
                <View style={styles.rightPath}>
                    <Text numberOfLines={2} style={styles.name}>{name}</Text>
                    <TouchableOpacity
                        onPress={() => Alert.alert("hello")}
                        style={{
                            position:'absolute',
                            right:0,
                            top:0,
                            padding:5,
                            width:26,
                            height:26,
                            backgroundColor: '#DDDDDD',
                            borderRadius:13,
                            display:displayTrash
                        }} >
                        <Icon name="trash" style={styles.iconTrash} />
                    </TouchableOpacity>
                    <View style={styles.money}>
                        <View>

                            <Text style={styles.sale}>{sale}</Text>
                            <Text style={styles.price}>{price}</Text>
                        </View>
                        {!addToCart? <TouchableOpacity
                            onPress={handleAddToCart}
                            style={styles.btn}>
                            <Text style={styles.textbtn}>MUA</Text>
                        </TouchableOpacity>:<View style={styles.ChangeNumber}>
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
                        </View>}
                        
                       
                    </View>

                </View>

            </TouchableOpacity>


        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        height: 90,
        width: (width - 30),
        borderBottomWidth: 1,
        borderColor: colors.placeholder,
        marginTop: 7,

    },
    leftPath: {
        flex: 0.25
    },
    rightPath: {
        flex: 0.75,
        paddingLeft: 8
    },
    discount: {
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        paddingHorizontal: 5,
        borderBottomRightRadius: 5,
        fontSize: fontsize.smallText * 1.1,
        fontWeight: 'bold',
        color: colors.whiteText
    },
    info: {
        flexDirection: 'row',
        flex: 1,
    },

    img: {
        width: '100%',
        height: '100%',
        marginBottom: 7,
        alignSelf: 'center'

    },
    name: {
        fontSize: fontsize.normalText,
        width: '100%',
        fontWeight: 'bold',
        color: colors.text
    },
    money: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    price: {
        fontWeight: 'bold',
        fontSize: fontsize.normalText,
        color: colors.primary
    },
    sale: {
        fontSize: fontsize.smallText,
        textDecorationLine: 'line-through',
        color: colors.placeholder
    },
    btn: {
        backgroundColor: colors.btn,
        width: 140,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    },
    textbtn: {
        fontSize: fontsize.normalText,
        fontWeight: 'bold',
        color: colors.primary
    },
    ChangeNumber: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:10
    },
    btnaddSub: {
        height: 30,
        width: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colors.primary
    },
    iconAddAndSub: {
        fontSize: fontsize.largeText,
        color: colors.primary,
    },
    numberOfProduct:{
        color: colors.text,
        fontSize: fontsize.normalText
    },
    iconTrash:{
        fontSize: fontsize.normalText,
        color: '#AAAAAA',
    }

})
export default ProductItemHz;