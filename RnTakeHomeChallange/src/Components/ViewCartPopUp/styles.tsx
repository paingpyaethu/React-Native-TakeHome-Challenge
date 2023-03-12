import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: width * 0.08,
    width: width * 0.6,
    zIndex: 50,
    marginLeft: width * 0.2,
  },
  subContainer: {
    backgroundColor: '#2794eb',
    marginHorizontal: width * 0.04,
    paddingVertical: width * 0.02,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.02,

    flexDirection: 'row',
    alignItems: 'center',
  },

  itemsLength: {
    fontSize: width * 0.05,
    color: '#fff',
  },
  viewCartTxt: {
    fontSize: width * 0.045,
    color: '#fff',
    marginLeft: width * 0.1,
  },
  cartTotalTxt: {
    fontSize: width * 0.05,
    color: '#fff',
  },
});

export default styles;
