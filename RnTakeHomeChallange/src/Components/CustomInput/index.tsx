import {View, TextInput} from 'react-native';
import React from 'react';
import {InputProps} from '../../../auth';
import styles from './styles';

const CustomInput: React.FC<InputProps> = ({
  onChangeText,
  IsSecureText,
  keyboardType,
  placeholder,
}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        secureTextEntry={IsSecureText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
      />
    </View>
  );
};

export default CustomInput;
