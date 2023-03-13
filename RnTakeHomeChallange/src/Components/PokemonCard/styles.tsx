import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  item: {
    // flex: 1,
    marginVertical: 16,
    marginHorizontal: 16,
    paddingBottom: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 100,
  },
  rarity: {
    color: '#0d8abc',
    fontSize: 16,
  },
  prices: {
    color: 'grey',
    fontSize: 20,
    marginBottom: 20,
  },
  btn: {
    position: 'absolute',
    width: 200,
    left: Dimensions.get('screen').width * -0.24,
  },
  itemCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 30,
    // marginBottom: 80,
  },
});

export default styles;
