import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width * 0.2,
    height: width * 0.3,
    borderRadius: width * 0.02,
  },
  groupedItemsContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',

    padding: width * 0.03,
    borderBottomWidth: width * 0.002,
  },
  btn: {
    width: 200,
  },
});

export default styles;
