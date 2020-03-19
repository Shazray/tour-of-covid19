import { createReducer, on } from '@ngrx/store';
import { afterRefresh } from '../redux/covid.action';
import { AppState } from './index';
import { doReset } from './covid.action';

export const initialState: AppState = {
  nazioni: [],
  province: [],
  regioni: [],
  lastNazione: undefined
};

const reducer = createReducer(initialState,
  on(afterRefresh, (state, {lastNazione}) => ({...state, lastNazione: lastNazione})),
  on(doReset, (state) => ({...state, lastNazione: undefined}))
);

export function covidReducer(state, action) {
  return reducer(state, action);
}
