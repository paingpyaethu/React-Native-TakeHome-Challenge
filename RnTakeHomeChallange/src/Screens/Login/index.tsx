import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {CustomInput, MainContainer} from '../../Components';
import CustomButton from '../../Components/CustomButton';
import {HOME_SCREEN} from '../../Navigators/RouteName';
import styles from './styles';

const Login = ({navigation}) => {
  const [name, setName] = useState<String>('');
  const [password, setPassword] = useState<String>('');

  const onSubmit = () => {
    if (name === 'rnhometest' && password === 'password') {
      navigation.navigate(HOME_SCREEN);
    } else {
      Alert.alert('Warning', 'Invaild Data', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
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
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          />
          <CustomInput
            IsSecureText={true}
            keyboardType="default"
            placeholder="* * * * * * * *"
            onChangeText={val => setPassword(val)}
            value={password}
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
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
