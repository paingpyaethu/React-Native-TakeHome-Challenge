import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {CustomInput, ViewCartPopUp} from '../../Components';
import PokemonCardItem from '../../Components/PokemonCard/PokemonCard';
import {cartTotalSelector} from '../../Store/selectors';
import usePokemonTcg from './Hooks/usePokemonTcg';
import styles from './styles';

const Home = () => {
  const {loading, setLoading, currentPage, itemList, setCurrentPage} =
    usePokemonTcg();

  const total = useSelector(cartTotalSelector);

  const _renderFooter = () => {
    return loading ? (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    ) : null;
  };

  const _handleLoadMore = () => {
    setLoading(true);
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <ViewCartPopUp cartTotal={total} />
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>TCG Marketplace</Text>
        </View>
        <ScrollView style={{flex: 1, paddingVertical: 20}}>
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
          <FlatList
            data={itemList}
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
            ListFooterComponent={_renderFooter}
            keyExtractor={item => item.id}
            onEndReached={_handleLoadMore}
            onEndReachedThreshold={0.3}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
