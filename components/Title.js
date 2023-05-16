import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fontsize } from "../constant";
import Icon from 'react-native-vector-icons/FontAwesome5';
const Title = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <View style={styles.bgr}>
                <Text style={styles.title}>{props.title}</Text>
                <TouchableOpacity style={styles.btnseeMore}>
                    <Text style={styles.seeMore}>Xem thêm {">>"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.line} />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:25
    },
    bgr: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 5,
        margin: 2
    },
    line: {
        backgroundColor: colors.primary,
        height: 3,
        width: '100%',
    },
    btnseeMore:{
        padding:5
    },
    title: {
        color: colors.whiteText,
        fontSize: fontsize.title,
        padding: 1,
        fontWeight: 'bold'
    },
    seeMore: {
        color: colors.whiteText,
        fontSize: fontsize.largeText,
    }
})
export default Title;