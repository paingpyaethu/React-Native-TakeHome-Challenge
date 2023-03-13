/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {CustomInput, ViewCartPopUp} from '../../Components';
import PokemonCardItem from '../../Components/PokemonCard/PokemonCard';
import {cartTotalSelector} from '../../Store/selectors';
import usePokemonTcg from './Hooks/usePokemonTcg';
import styles from './styles';

const ITEM_HEIGHT = 16;
const Home = () => {
  const {loading, setLoading, page, itemList, setPage} = usePokemonTcg();

  const total = useSelector(cartTotalSelector);

  const _renderFooter = () => {
    return loading ? (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    ) : null;
  };

  const _renderHeader = () => {
    return (
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <CustomInput placeholder="Name.." onChangeText={() => {}} />
        <View style={styles.dropdownContainer}>
          <View style={styles.dropdown}>
            <Text>Type</Text>
            <Text>^</Text>
          </View>
          <View style={styles.dropdown}>
            <Text>Rarity</Text>
            <Text>^</Text>
          </View>
          <View style={styles.dropdown}>
            <Text>Set</Text>
            <Text>^</Text>
          </View>
        </View>
      </View>
    );
  };

  const _handleLoadMore = () => {
    setLoading(true);
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ViewCartPopUp cartTotal={total} />
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>TCG Marketplace</Text>
        </View>
        <FlatList
          data={itemList}
          initialNumToRender={12}
          maxToRenderPerBatch={12}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          renderItem={({item}) => (
            <PokemonCardItem
              id={item.id}
              name={item.name}
              rarity={item.rarity}
              image={item.images.large}
              prices={item.cardmarket.prices}
              stock={item.set.total}
            />
          )}
          ListHeaderComponent={_renderHeader}
          ListFooterComponent={_renderFooter}
          keyExtractor={item => item.id}
          onEndReached={_handleLoadMore}
          onEndReachedThreshold={0.3}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
