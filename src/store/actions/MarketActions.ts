import { Dispatch } from 'react';
import { rate, fetchDataSuccesAction, SuccessActionType } from '../../types/types';



export const fetchFirstMarket = (type: SuccessActionType, market: string) => {

  // action получения данных из API
  return async (dispatch: Dispatch<fetchDataSuccesAction>) => {

    const fetchData = async (poll: string = '') => {
      const url: string = `http://localhost:3000/api/v1/${market}${poll}`;
      try {
        const response = await fetch(url)
          .then(res => res.json());

        // созание валютных пар
        const result: rate = {
          'RUB/USD': +(response['rates']['RUB'] / response['rates']['USD']).toFixed(2),
          'RUB/EUR': +(response['rates']['RUB'] / response['rates']['EUR']).toFixed(2),
          'EUR/USD': +(response['rates']['EUR'] / response['rates']['USD']).toFixed(2)
        };

        dispatch({
          type: type,
          payload: result
        });

        // зацикливанние запроса
        poll && fetchData('/poll');

      } catch (e) {
        console.log(e);
      }
    };
    // получение данных обычным запросом
    fetchData();
    // получение данных через long poll
    fetchData('/poll');
  };


};

