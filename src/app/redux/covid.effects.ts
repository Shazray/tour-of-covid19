import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
// import { MoviesService } from './movies.service';
import { NazionaleService } from '../service/nazionale/nazionale.service';
import { NazioneActions, afterRefresh } from './covid.action';

@Injectable()
export class NazioneEffects {

  loadNazione$ = createEffect(() => this.actions$.pipe(
    ofType(NazioneActions.REFRESH_COUNTERS),
    mergeMap(() => this.nazioneService.getUltimoNazionale()
      .pipe(
        map(nazione => afterRefresh({lastNazione: nazione})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private nazioneService: NazionaleService
  ) {}
}
