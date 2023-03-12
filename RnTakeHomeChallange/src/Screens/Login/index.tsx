import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CustomInput, MainContainer} from '../../Components';
import CustomButton from '../../Components/CustomButton';
import {HOME_SCREEN} from '../../Navigators/RouteName';
import styles from './styles';

const Login = ({navigation}) => {
  const [name, setName] = useState<String>('');
  const [password, setPassword] = useState<String>('');

  const onSubmit = () => {
    if (name === '' || password === '') return;
    navigation.navigate(HOME_SCREEN);
  };
  return (
    <MainContainer>
      <View style={styles.container}>
        <View>
          <Text style={styles.loginTxt}>Welcome to TCG MarketPlace</Text>

          <CustomInput
            keyboardType={'default'}
            placeholder="Enter your name"
            onChangeText={val => setName(val)}
            value={name}
          />
          <CustomInput
            IsSecureText={true}
            keyboardType="default"
            placeholder="* * * * * * * *"
            onChangeText={val => setPassword(val)}
            value={password}
          />
          <CustomButton
            buttonText="Login"
            style={styles.loginBtn}
            onPress={onSubmit}
          />
        </View>
      </View>
    </MainContainer>
  );
};

export default Login;
