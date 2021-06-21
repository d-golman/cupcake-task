type rate = {
  'RUB/USD'?: number,
  'RUB/EUR'?: number,
  'EUR/USD'?: number;
};

export interface IMarketState {
  firstRates: rate,
  secondRates: rate,
  thirdRates: rate;
}

export enum EnumMarketTypes {
  FETCH_FIRST_DATA_SUCCESS = 'FETCH_FIRST_DATA_SUCCESS',
  FETCH_SECOND_DATA_SUCCESS = 'FETCH_SECOND_DATA_SUCCESS',
  FETCH_THIRD_DATA_SUCCESS = 'FETCH_THIRD_DATA_SUCCESS',
}

export type SuccessActionType = EnumMarketTypes.FETCH_FIRST_DATA_SUCCESS | EnumMarketTypes.FETCH_SECOND_DATA_SUCCESS | EnumMarketTypes.FETCH_THIRD_DATA_SUCCESS;



export type fetchDataSuccesAction = {
  type: SuccessActionType,
  payload: any;
};
