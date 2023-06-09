import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerTxt: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 100,
    height: 40,
    borderRadius: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
});

export default styles;
