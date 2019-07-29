import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './redux/app.state';
import {AddCar, DeleteCar, LoadCars, UpdateCar} from './redux/cars.action';
import {Car, Cars} from './car.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  preloadCars(): Observable<Car[]> {
    return this.http.get<Car[]>(CarsService.BASE_URL + 'cars');
  }

  loadCars(): void {
   this.preloadCars()
      .subscribe((cars: Car[]) => {
        this.store.dispatch(new LoadCars(cars));
      });
  }

  addCar(newCar: Car): void {
    this.http.post(CarsService.BASE_URL + 'cars', newCar)
      .subscribe((car: Car) => {
        this.store.dispatch(new AddCar(car));
      });
  }

  deleteCar(car: Car): void {
    this.http.delete(CarsService.BASE_URL + `cars/` + car.id)
    .subscribe( _ => {
        this.store.dispatch(new DeleteCar(car));
      });
  }

  updateCar(car: Car): void {
    this.http.put(CarsService.BASE_URL + 'cars/' + car.id, car)
      .subscribe((responseCar: Car) => {
        this.store.dispatch(new UpdateCar(responseCar));
      });

  }
}
