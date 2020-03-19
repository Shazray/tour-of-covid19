import { createAction, props } from '@ngrx/store';
import { Nazione } from '../models/nazione.interface';
import { AppState } from './index';

export enum NazioneActions {
    REFRESH_COUNTERS = '[Counter] refresh contatori',
    REFRESH_COUNTERS_WITH_PAYLOAD = '[Counter] restituisci i dati',
    DATA_RESET = '[Content] reset dati',
    FORCE_REFRESH_COUNTERS = '[Counter] forza refresh contatori',
}

export const doRefresh = createAction(NazioneActions.REFRESH_COUNTERS);
export const afterRefresh = createAction(NazioneActions.REFRESH_COUNTERS_WITH_PAYLOAD, props<{lastNazione: Nazione}>());
export const doReset = createAction(NazioneActions.DATA_RESET);
export const forceRefresh = createAction(NazioneActions.FORCE_REFRESH_COUNTERS);
