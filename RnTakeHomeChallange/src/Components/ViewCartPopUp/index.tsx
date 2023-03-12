import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {CART_SCREEN} from '../../Navigators/RouteName';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ViewCartPopUp = ({items}) => {
  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.navigate(CART_SCREEN);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.subContainer} onPress={onSubmit}>
        <Text style={styles.itemsLength}>{items}</Text>
        <Text style={styles.viewCartTxt}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewCartPopUp;
