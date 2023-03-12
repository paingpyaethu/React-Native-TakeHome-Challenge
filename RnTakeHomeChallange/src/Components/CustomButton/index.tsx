import React from 'react';
import {Pressable, Text, View} from 'react-native';
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
  };

  const buttonTitleStyles = {
    primary: {
      color: '#fff',
    },
  };

  return (
    <View>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={[styles.btn, buttonStyles[type], style]}>
        <Text style={[styles.btnText, buttonTitleStyles[type]]}>
          {buttonText}
        </Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
