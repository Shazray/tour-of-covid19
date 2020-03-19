import { createAction, props } from '@ngrx/store';
import { Nazione } from '../models/nazione.interface';

export enum NazioneActions {
    REFRESH_COUNTERS = '[Counter] refresh contatori',
    REFRESH_COUNTERS_WITH_PAYLOAD = '[Counter] restituisci i dati'
}

export const doRefresh = createAction(NazioneActions.REFRESH_COUNTERS);
export const afterRefresh = createAction(NazioneActions.REFRESH_COUNTERS_WITH_PAYLOAD, props<{nazione: Nazione}>());
