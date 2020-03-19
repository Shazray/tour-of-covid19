import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { NazioneActions } from '../actions/nazione.action';
// import { MoviesService } from './movies.service';
import { NazionaleService } from '../service/nazionale/nazionale.service';

@Injectable()
export class NazioneEffects {

  loadNazione$ = createEffect(() => this.actions$.pipe(
    ofType(NazioneActions.REFRESH_COUNTERS),
    mergeMap(() => this.nazioneService.getUltimoNazionale()
      .pipe(
        map(nazione => ({type: NazioneActions.REFRESH_COUNTERS_WITH_PAYLOAD, payload: nazione})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private nazioneService: NazionaleService
  ) {}
}
