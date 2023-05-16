import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { 
  Login, 
  Home, 
  ProductDetail, 
  Discount, 
  Notification,
  Cart, 
  Account, 
  Search } from './views';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import {BottomTab} from './components'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab" screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Home" component={Home}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Discount" component={Discount} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;