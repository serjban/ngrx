import {Component} from '@angular/core';
import {Car} from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cars: Car[] = [
    new Car('Ford', '11.11.11', 'Focus', false, 1),
    new Car('Audi', '12.12.12', 'A6', false, 2)
  ];

  onAdd(car: Car) {
    this.cars.push(car);
  }
  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id);
  }
}
