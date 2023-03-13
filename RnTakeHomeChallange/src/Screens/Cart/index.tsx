/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import {MainContainer} from '../../Components';
import styles from './styles';
import CustomButton from '../../Components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  clear,
  decrement,
  increment,
  removeItem,
} from '../../Store/slices/cartSlice';
import {useNavigation} from '@react-navigation/native';
import {cartTotalPriceSelector} from '../../Store/selectors';

const Cart = () => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.carts);
  const totalPrice = useSelector(cartTotalPriceSelector);

  const dispatch = useDispatch();

  const _renderItem = ({item}) => {
    return (
      <View style={styles.groupedItemsContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={{marginLeft: 20}}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                {item.name}
              </Text>
              <Text style={{fontSize: 16}}>{item.sum.toFixed(2)} per card</Text>
              <Text style={{marginTop: 20, color: 'red', fontSize: 20}}>
                {item.stock}{' '}
                <Text style={{color: 'grey', fontSize: 18}}>card left</Text>
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'blue', fontSize: 18, fontWeight: 'bold'}}>
                {item.quantity}
              </Text>
              <View>
                <Text
                  style={{fontSize: 20}}
                  onPress={() => {
                    dispatch(increment(item.id));
                  }}>
                  +
                </Text>
                <Text
                  style={{fontSize: 30}}
                  onPress={() => {
                    if (item.quantity === 1) {
                      dispatch(removeItem(item.id));

                      console.log('removed');
                      return;
                    } else {
                      dispatch(decrement(item.id));
                    }
                  }}>
                  -
                </Text>
              </View>
            </View>
            <View>
              <Text>price</Text>
              <Text>{'$' + (item.sum * item.quantity).toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const _renderFooter = () => {
    return cart.length === 0 ? (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: Dimensions.get('screen').height * 0.5,
        }}>
        <Text>Empty Data</Text>
      </View>
    ) : null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={_renderFooter}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 30,
          backgroundColor: '#fff',
        }}>
        <Text onPress={() => dispatch(clear())}>Clear all</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 200,
            marginTop: 30,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Total cards</Text>
          <Text style={{color: 'red', fontSize: 16}}>{cart.length}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 200,
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Total price</Text>
          <Text style={{color: 'red', fontSize: 20}}>
            {'$' + totalPrice.toFixed(2)}
          </Text>
        </View>
        <CustomButton type="payNow" buttonText="Pay now" style={styles.btn} />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'red',
            width: 50,
            height: 50,
            borderRadius: 20,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              textAlign: 'center',
              lineHeight: 50,
            }}>
            x
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
