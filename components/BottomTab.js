import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Login, ProductDetail, Discount, Notification, Cart, Account } from '../views';
import { colors } from '../constant';
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

function BottomTab(props) {
    const {navigation} =  props
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
            }}>
            <Tab.Screen name="Sản phẩm" component={Home} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Icon
                        name="microsoft"
                        size={size*0.9}
                        color={focused ? colors.primary : colors.placeholder}
                    />),
            }} />
            <Tab.Screen name="Khuyến mãi" component={Discount} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Icon
                        name="tag"
                        size={size*0.9}
                        color={focused ? colors.primary : colors.placeholder}
                    />),
            }} />
            <Tab.Screen name="Giỏ hàng" component={Cart} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Icon
                        name="shopping-cart"
                        size={size*0.9}
                        color={focused ? colors.primary : colors.placeholder}
                    />),
                    tabBarButton: (props) => (
                        <TouchableOpacity {...props} onPress={() => {
                          navigation.navigate('Cart')
                        }} />
                      ),
            }} />
            <Tab.Screen name="Thông báo" component={Notification} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Icon
                        name="bell"
                        size={size*0.9}
                        color={focused ? colors.primary : colors.placeholder}
                    />),
            }} />
            <Tab.Screen name="Tài khoản" component={Account} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Icon 
                        name="user"
                        size={size*0.9}
                        color={focused ? colors.primary : colors.placeholder}
                    />),
            }} />
        </Tab.Navigator>
    );
}
export default BottomTab;