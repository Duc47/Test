import { Image, StyleSheet, Text, TouchableOpacity, View,Dimensions } from "react-native";
import { colors, fontsize } from "../constant";
import Icon from 'react-native-vector-icons/FontAwesome5';
const { width } = Dimensions.get('window');
const CategorysItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.img}
                source={props.url}
                resizeMode={'stretch'}
            />
            <Text umberOfLines={2} style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
                          
    )  
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: (width-8) / 5,
        paddingVertical: 5,
        borderRadius: 10,
        justifyContent: 'center',
    },
    img:{
        width:50,
        height:50,
    },
    text:{
        fontSize:fontsize.smallText,
        textAlign:'center',
        color:colors.text
    }
    
})
export default CategorysItem;