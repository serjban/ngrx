import {Component} from '@angular/core';
import * as moment from 'moment';
import {Car} from '../car.model';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import {AddCar} from '../redux/cars.action';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent {
  private id = 2;

  carName = '';
  carModel = '';

  constructor(
    private store: Store<AppState>, private service: CarsService) {
  }

  onAdd() {
    if (this.carModel === '' || this.carName === '') {
      return;
    }

    this.id = ++this.id;

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );

    this.store.dispatch(new AddCar(car));

    this.carModel = '';
    this.carName = '';
  }

  onLoad() {
    this.service.loadCars();
  }

}
