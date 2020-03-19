import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, filter, map, mergeMap, withLatestFrom, tap, concatMap, switchMap } from 'rxjs/operators';
// import { MoviesService } from './movies.service';
import { NazionaleService } from '../service/nazionale/nazionale.service';
import { afterRefresh, NazioneActions, doReset, doRefresh } from './covid.action';
import { selectLastNazione } from './index';

@Injectable()
export class NazioneEffects {

  loadNazione$ = createEffect(() => this.actions$.pipe(
    ofType(NazioneActions.REFRESH_COUNTERS),
    tap(() => console.log('Sono passato di qui prima di withlatestfrom')),
    withLatestFrom(this.store$.pipe(select(selectLastNazione))),
    filter(([never, lastNazione]) => !lastNazione),
    tap(() => console.log('Sono passato di qui')),
    mergeMap(() => this.nazioneService.getUltimoNazionale()
      .pipe(
        map(nazione => afterRefresh({lastNazione: nazione})),
        catchError(() => EMPTY)
      ))
    )
  );

  forceRefresh$ = createEffect(() => this.actions$.pipe(
    ofType(NazioneActions.FORCE_REFRESH_COUNTERS),
    concatMap(() => [doReset(), doRefresh()]))
  );

  constructor(
    private actions$: Actions,
    private nazioneService: NazionaleService,
    private store$: Store<any>
  ) {}
}
