import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: width * 0.08,
    width: width,
    zIndex: 50,
  },
  subContainer: {
    backgroundColor: '#2794eb',
    marginHorizontal: width * 0.04,
    paddingVertical: width * 0.02,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.02,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemsLength: {
    fontSize: width * 0.05,
    color: '#fff',
  },
  viewCartTxt: {
    fontSize: width * 0.045,
    color: '#fff',
  },
  cartTotalTxt: {
    fontSize: width * 0.05,
    color: '#fff',
  },
});

export default styles;
