import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { colors, fontsize } from "../constant";
import Icon from 'react-native-vector-icons/FontAwesome5';
const { width } = Dimensions.get('window');
const ProductsItem = (props) => {
    const { onPress } = props
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.info} onPress={onPress}>
                    <Text style={styles.discount}>{props.discount}</Text>
                    <Image
                        style={styles.img}
                        resizeMode={'stretch'}
                        source={{ uri: props.uri }}
                    />
                    <Text numberOfLines={2} style={styles.name}>{props.name}</Text>
                    <Text style={styles.sale}>{props.sale}</Text>
                    <Text style={styles.price}>{props.price}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textbtn}>MUA</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: (width - 20) / 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.placeholder,
        marginTop: 7,
        margin: 2

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
        flex: 1,
        padding: 5
    },

    img: {
        width: '100%',
        height: '50%',
        marginBottom: 7,
        alignSelf: 'center'

    },
    name: {
        fontSize: fontsize.normalText,
        width: '100%',
        color: colors.text
    },
    money: {
        width: '100%',
        flexDirection: 'row',

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
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textbtn: {
        fontSize: fontsize.normalText,
        fontWeight: 'bold',
        color: colors.primary
    },



})
export default ProductsItem;