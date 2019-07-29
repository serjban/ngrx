import {Component} from '@angular/core';
import * as moment from 'moment';
import {Car} from '../car.model';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent {
  carName = '';
  carModel = '';

  constructor(private service: CarsService) {
  }

  onAdd() {
    if (this.carModel === '' || this.carName === '') {
      return;
    }

    const car = new Car(this.carName, moment().format('DD.MM.YY'), this.carModel, false);
    this.service.addCar(car);

    this.carModel = '';
    this.carName = '';
  }

  onLoad() {
    this.service.loadCars();
  }

}
