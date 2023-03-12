import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CustomButtonProps} from '../../../auth';
import styles from './styles';

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  buttonText,
  disabled,
  type = 'primary',
  style,
}) => {
  const buttonStyles = {
    primary: {
      backgroundColor: '#f9bf8f',
    },
    selectCard: {
      backgroundColor: '#ffd717',
    },
    payNow: {
      backgroundColor: 'blue',
    },
    dark: {
      backgroundColor: 'black',
    },
  };

  const buttonTitleStyles = {
    primary: {
      color: '#fff',
    },
    payNow: {
      color: '#fff',
    },
    dark: {
      color: '#fff',
    },
  };

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[styles.btn, buttonStyles[type], style]}>
        <Text style={[styles.btnText, buttonTitleStyles[type]]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
