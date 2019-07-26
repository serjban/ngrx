import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './redux/app.state';
import {LoadCars} from './redux/cars.action';
import {Car} from './car.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  loadCars(): void {
    this.http.get(CarsService.BASE_URL + 'cars')
      .pipe()
      .subscribe((cars: Car[]) => {
        this.store.dispatch(new LoadCars(cars));
      });
  }
}
