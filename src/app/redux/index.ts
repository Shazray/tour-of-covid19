import { createSelector } from '@ngrx/store';
import { Provincia } from 'src/app/models/provincia.interface';
import { Nazione } from '../models/nazione.interface';
import { Regione } from '../models/regione.interface';

export interface AppState {
  nazioni: Nazione[];
  province: Provincia[];
  regioni: Regione[];
  lastNazione: Nazione;
}

export const selectState = (state: {covid: AppState}) => state.covid;

export const selectLastNazione = createSelector(
    selectState,
    (state: AppState) => state.lastNazione
);

export const selectNazioni = createSelector(
    selectState,
    (state: AppState) => state.nazioni
);

export const selectProvince = createSelector(
    selectState,
    (state: AppState) => state.province
);

export const selectRegioni = createSelector(
    selectState,
    (state: AppState) => state.regioni
);

// export const resetSelector = (selector: MemoizedSelector<{covid: AppState}, Nazione>) => selector.release();

// selectLastNazione.release();
