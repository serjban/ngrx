import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {CAR_ACTION} from './cars.action';
import {CarsService} from '../cars.service';
import {mergeMap, switchMap} from 'rxjs/operators';
import {Car} from '../car.model';

@Injectable()
export class CarsEffect {

  constructor(private actions$: Actions, private service: CarsService) {
  }

  @Effect()
  loadCars$ = this.actions$.pipe(
    ofType(CAR_ACTION.ADD_CAR),
    switchMap(() => {
      return this.service.preloadCars()
        .pipe(
          mergeMap((cars: Car[]) => {
            return [{
              type: CAR_ACTION.LOAD_CARS,
              payload: cars
            }];
          })
        );
    })
  );
}
