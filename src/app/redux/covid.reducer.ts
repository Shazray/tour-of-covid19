import { createReducer, on } from '@ngrx/store';
import { afterRefresh } from '../redux/covid.action';
import { AppState } from './index';

export const initialState: AppState = {
  nazioni: [],
  province: [],
  regioni: [],
  lastNazione: undefined
};
/* export const initialState = {
  nazione: undefined,
  province: undefined,
  regione: undefined
}; */

const reducer = createReducer(initialState,
  on(afterRefresh, (state, {lastNazione}) => ({...state, lastNazione: lastNazione}))
);

export function covidReducer(state, action) {
  return reducer(state, action);
}
