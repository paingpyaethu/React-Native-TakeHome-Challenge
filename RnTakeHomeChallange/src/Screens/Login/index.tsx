import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CustomInput, MainContainer} from '../../Components';
import CustomButton from '../../Components/CustomButton';
import styles from './styles';

const Login = () => {
  const [name, setName] = useState<String | null>(null);
  const [password, setPassword] = useState<String | null>(null);

  const onChangeUserName = () => {};
  const onChangePassword = () => {};
  return (
    <MainContainer>
      <View style={styles.container}>
        <View>
          <Text style={styles.loginTxt}>Welcome to TCG MarketPlace</Text>

          <CustomInput
            keyboardType={'default'}
            placeholder="Enter your name"
            onChangeText={onChangeUserName}
          />
          <CustomInput
            IsSecureText={true}
            keyboardType="default"
            placeholder="* * * * * * * *"
            onChangeText={onChangePassword}
          />
          <CustomButton buttonText="Login" style={styles.loginBtn} />
        </View>
      </View>
    </MainContainer>
  );
};

export default Login;
