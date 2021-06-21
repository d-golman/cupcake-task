import { AnyAction } from 'redux';
import { IMarketState, EnumMarketTypes, fetchDataSuccesAction } from '../../types/types';

const initialSate: IMarketState = {
  firstRates: {},
  secondRates: {},
  thirdRates: {}
};

export const MarketReducer = (state = initialSate, action: AnyAction): IMarketState => {
  switch (action.type) {

    case EnumMarketTypes.FETCH_FIRST_DATA_SUCCESS:
      return {
        ...state,
        firstRates: action.payload
      };

    case EnumMarketTypes.FETCH_SECOND_DATA_SUCCESS:
      return {
        ...state,
        secondRates: action.payload
      };

    case EnumMarketTypes.FETCH_THIRD_DATA_SUCCESS:
      return {
        ...state,
        thirdRates: action.payload
      };
    default:
      return {
        ...state
      };
  }
};