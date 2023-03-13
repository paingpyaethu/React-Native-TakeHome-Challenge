import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
