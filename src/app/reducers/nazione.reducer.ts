import { createReducer, on } from '@ngrx/store';
import { afterRefresh } from '../actions/nazione.action';

export const nazione = {};

const _nazioneReducer = createReducer(nazione,
  on(afterRefresh, state => state)
);

export function nazioneReducer(state, action) {
  return _nazioneReducer(state, action);
}
