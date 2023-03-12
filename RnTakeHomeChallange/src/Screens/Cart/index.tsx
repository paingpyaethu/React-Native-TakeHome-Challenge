/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MainContainer} from '../../Components';
import styles from './styles';
import CustomButton from '../../Components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  clearFromCart,
  removeFromCart,
  selectCartTotal,
} from '../../Store/slices/cartSlice';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.carts.cartData);
  const [groupedItemsInCart, setGroupedItemsInCart] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInCart(groupedItems);
  }, [items]);
  const cartTotal = useSelector(selectCartTotal);

  // const _addItemToCart = () => {};
  console.log(groupedItemsInCart);
  return (
    <MainContainer>
      <ScrollView>
        {Object.entries(groupedItemsInCart).map(([key, item]) => (
          <View key={key} style={styles.groupedItemsContainer}>
            {/* <Text>{JSON.stringify(item, null, 2)}</Text> */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: item[0].image}} style={styles.image} />
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {item[0].name}
                  </Text>
                  <Text style={{fontSize: 16}}>
                    {item[0].sum.toFixed(2)}per card
                  </Text>
                  <Text style={{marginTop: 20, color: 'red', fontSize: 20}}>
                    {item[0].stock}{' '}
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
                  <Text
                    style={{color: 'blue', fontSize: 18, fontWeight: 'bold'}}>
                    {item.length}
                  </Text>
                  <View>
                    <Text
                      style={{fontSize: 20}}
                      onPress={() => dispatch(addToCart({id: key}))}>
                      +
                    </Text>
                    <Text
                      style={{fontSize: 30}}
                      onPress={() => dispatch(removeFromCart({id: key}))}>
                      -
                    </Text>
                  </View>
                </View>
                <View>
                  <Text>price</Text>
                  <Text>{(item[0].sum * item.length).toFixed(2)}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Text onPress={() => dispatch(clearFromCart())}>Clear all</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 200,
            marginTop: 30,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Total cards</Text>
          <Text style={{color: 'red', fontSize: 16}}>{items.length}</Text>
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
            {'$' + cartTotal.toFixed(2)}
          </Text>
        </View>
        <CustomButton type="payNow" buttonText="Pay now" style={styles.btn} />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              backgroundColor: 'red',
              color: '#fff',
              fontSize: 20,
              width: 50,
              height: 50,
              textAlign: 'center',
              borderRadius: 20,
              marginVertical: 30,
              lineHeight: 50,
            }}>
            x
          </Text>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
};

export default Cart;
