import { FlatList, View, StyleSheet, Text, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { Title, Header, CategorysItem, ProductsItem } from "../components"
import { images } from "../constant";
import { ProductData,CategoryData } from "../constant/Data";
const Home = (props) => {
  const { navigation } = props
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Header onPressIn={() => navigation.navigate('Search')}></Header>
      <ScrollView>
        <View style={styles.Categorys}>
          <FlatList
            data={CategoryData.slice(0, 10)}
            renderItem={({ item }) => <CategorysItem name={item.title} url={item.uri} />}
            keyExtractor={item => item.title}
            numColumns={5}
            scrollEnabled={false}
          />
        </View>
        <Title title={'KHUYẾN MÃI'} />
        <View style={styles.products}>
          <FlatList
            data={ProductData.slice(0, 6)}
            renderItem={({ item }) => <ProductsItem
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
            numColumns={3}
            scrollEnabled={false}
          />
        </View>
        <Title title={'BÁN CHẠY'} />
        <View style={styles.products}>
        <FlatList
            data={ProductData.slice(0, 6)}
            renderItem={({ item }) => <ProductsItem
              onPress={() => navigation.navigate('ProductDetail', {
                discount: item.discount,
                name: item.name,
                price: item.price,
                sale: item.sale,
                uri: item.uri
              })}
              discount={item.discount}
              name={item.name}
              price={item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
              sale={item.sale.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
              uri={item.uri} />}
            keyExtractor={item => item.name}
            numColumns={3}
            scrollEnabled={false}
          />
          </View>
      </ScrollView>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  Categorys: {
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 170
  },
  products: {
    justifyContent: 'space-around',
    paddingHorizontal: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',

  }
})
export default Home;