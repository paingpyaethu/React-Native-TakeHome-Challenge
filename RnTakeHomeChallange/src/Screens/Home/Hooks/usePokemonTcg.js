import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {getPokemonApi} from '../../../Api/pokemonTcgApi';

const usePokemonTcg = () => {
  const [loading, setLoading] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [currentPage, setCurrentPage] = useState(12);

  useFocusEffect(
    useCallback(() => {
      getItemList();
    }, []),
  );

  const getItemList = () => {
    setLoading(true);
    getPokemonApi({currentPage})
      .then(res => {
        console.log('res?.data::', res?.data);
        setItemList(res?.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {loading, itemList, setCurrentPage, currentPage, setLoading};
};

export default usePokemonTcg;
