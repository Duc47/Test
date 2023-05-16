import { Image,Alert, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { colors, fontsize, icons, images } from "../constant";
import Icon from 'react-native-vector-icons/FontAwesome5';
const Header = (props) => {
    const {onPressIn} = props
    return (
        <View style={styles.container}>
            <Icon name="search" style={styles.seach_icon} />
            <TouchableOpacity onPress={onPressIn}  style={styles.input}>
                <Text style={{color:colors.placeholder,fontSize:fontsize.normalText}}>Hôm nay bạn muốn mua gì?</Text>
            </TouchableOpacity>
          
            
            <TouchableOpacity style={styles.btnIcon}>
                <Image
                    style={styles.header_Icon}
                    resizeMode={'stretch'}
                    source={require('../assets/shopping-cart.png')}
                />
                <Text style={styles.quantity}>1</Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        height: 62,
        alignItems: 'center',
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        flex: 1,
        marginLeft: 10,
        borderRadius: 7,
        paddingLeft: 40,
        backgroundColor: colors.whiteText,
        height:47,
        justifyContent:'center'
    },
    btnIcon: {
        padding: 17,
    },
    header_Icon: {
        width: 25,
        height: 25,
        tintColor: colors.whiteText
    },
    seach_icon: {
        fontSize: 20,
        color: colors.primary,
        position: 'absolute',
        top: 19,
        left: 20,
        zIndex: 1
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
    }
})
export default Header;