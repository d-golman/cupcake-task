import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchFirstMarket } from '../../store/actions/MarketActions';
import { EnumMarketTypes } from '../../types/types';
import './mainPage.css';
const MainPage: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFirstMarket(EnumMarketTypes.FETCH_FIRST_DATA_SUCCESS, 'first'));
    dispatch(fetchFirstMarket(EnumMarketTypes.FETCH_SECOND_DATA_SUCCESS, 'second'));
    dispatch(fetchFirstMarket(EnumMarketTypes.FETCH_THIRD_DATA_SUCCESS, 'third'));
  }, []);

  const { firstRates, secondRates, thirdRates } = useTypedSelector(state => state.market);

  const RU: any[] = [firstRates['RUB/USD'], secondRates['RUB/USD'], thirdRates['RUB/USD']];
  const RE: any[] = [firstRates['RUB/EUR'], secondRates['RUB/EUR'], thirdRates['RUB/EUR']];
  const EU: any[] = [firstRates['EUR/USD'], secondRates['EUR/USD'], thirdRates['EUR/USD']];

  return (
    <div className="container">
      <table className='currency-table'>
        <tr className='currency-table-row'>
          <th className='currency-table-cell'>Pair name / market</th>
          <th className='currency-table-cell'>First</th>
          <th className='currency-table-cell'>Second</th>
          <th className='currency-table-cell'>Third</th>
        </tr>
        <tr className='currency-table-row'>
          <th className='currency-table-cell'>RUB/USD</th>
          {RU.map(pair => {
            return <td className={`${Math.min(...RU) == pair ? 'currency-table-cell min' : 'currency-table-cell'}`}  >{pair}</td>;
          })}
        </tr>
        <tr className='currency-table-row'>
          <th className='currency-table-cell'>RUB/EUR</th>
          {RE.map(pair => {
            return <td className={`${Math.min(...RE) == pair ? 'currency-table-cell min' : 'currency-table-cell'}`}  >{pair}</td>;
          })}
        </tr>
        <tr className='currency-table-row'>
          <th className='currency-table-cell'>EUR/USD</th>
          {EU.map(pair => {
            return <td className={`${Math.min(...EU) == pair ? 'currency-table-cell min' : 'currency-table-cell'}`}  >{pair}</td>;
          })}
        </tr>
      </table>
    </div>
  );
};

export default MainPage;
