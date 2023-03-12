import React from 'react';
import {SafeAreaView} from 'react-native';
import {IProps} from '../../../auth';
import styles from './styles';

const index: React.FC<IProps> = ({children}) => {
  return <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>;
};

export default index;
