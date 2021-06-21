// тип данных валютных пар
export type rate = {
  'RUB/USD'?: number,
  'RUB/EUR'?: number,
  'EUR/USD'?: number;
};

// интерфейс стейта
export interface IMarketState {
  firstRates: rate,
  secondRates: rate,
  thirdRates: rate;
}

// enum типов action
export enum EnumMarketTypes {
  FETCH_FIRST_DATA_SUCCESS = 'FETCH_FIRST_DATA_SUCCESS',
  FETCH_SECOND_DATA_SUCCESS = 'FETCH_SECOND_DATA_SUCCESS',
  FETCH_THIRD_DATA_SUCCESS = 'FETCH_THIRD_DATA_SUCCESS',
}

// возможные типы action
export type SuccessActionType = EnumMarketTypes.FETCH_FIRST_DATA_SUCCESS | EnumMarketTypes.FETCH_SECOND_DATA_SUCCESS | EnumMarketTypes.FETCH_THIRD_DATA_SUCCESS;


// тип даннных передаваемых в reducer
export type fetchDataSuccesAction = {
  type: SuccessActionType,
  payload: any;
};
