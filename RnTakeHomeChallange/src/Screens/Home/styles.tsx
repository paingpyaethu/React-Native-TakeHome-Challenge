import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: 30,
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
