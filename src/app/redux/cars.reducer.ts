import {Action} from '@ngrx/store';
import {Car} from '../car.model';
import {AddCar, CAR_ACTION} from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '11.11.11', 'Focus', false, 1),
    new Car('Audi', '12.12.12', 'A6', false, 2)
  ]
};

export function carsReducer(state = initialState, action: AddCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    default:
      return state;
  }
}
