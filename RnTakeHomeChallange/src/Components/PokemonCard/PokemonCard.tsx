/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomButton from '../CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../Store/slices/cartSlice';

type ItemProps = {
  name: string;
  rarity: string;
  image: string;
  prices: number;
  stock: number;
  id: string;
};

const PokemonCardItem = ({
  name,
  rarity,
  image,
  prices,
  stock,
  id,
}: ItemProps) => {
  const values = Object.values(prices);

  const sum = values.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const [isCart, setIsCart] = useState(false);
  const items = useSelector(state => state.carts.cartData);
  const dispatch = useDispatch();

  const _addItemToCart = () => {
    dispatch(addToCart({id, name, sum, image, stock}));
    // items ? setIsCart(true) : setIsCart(false);
  };

  return (
    <View style={styles.item}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: -100,
          zIndex: 1,
        }}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.itemCard}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rarity}>{rarity}</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={styles.prices}>{'$' + sum.toFixed(2)}</Text>
          <Text style={[styles.prices, {marginLeft: 10}]}>
            {stock + ' left'}
          </Text>
        </View>
        {isCart === true ? (
          <CustomButton
            disabled={isCart}
            type="dark"
            buttonText="Select Card"
            style={styles.btn}
            onPress={_addItemToCart}
          />
        ) : (
          <CustomButton
            type="selectCard"
            buttonText="Select Card"
            style={styles.btn}
            onPress={_addItemToCart}
          />
        )}
      </View>
    </View>
  );
};

export default PokemonCardItem;
