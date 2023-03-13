import {useEffect, useState} from 'react';
import {getPokemonApi} from '../../../Api/pokemonTcgApi';

const usePokemonTcg = () => {
  const [loading, setLoading] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [page, setPage] = useState(12);

  useEffect(() => {
    getItemList();
  }, [page]);

  const getItemList = () => {
    setLoading(true);
    getPokemonApi({currentPage: page})
      .then(res => {
        console.log('res?.data::', res?.data);
        setItemList(res?.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {loading, itemList, setPage, page, setLoading};
};

export default usePokemonTcg;
