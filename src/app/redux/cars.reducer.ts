import {Car} from '../car.model';
import {CAR_ACTION, CarsAction} from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '11.11.11', 'Focus', false, 1),
    new Car('Audi', '12.12.12', 'A6', false, 2)
  ]
};

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      };
    case CAR_ACTION.UPDATE_CAR:
      const index = state.cars.findIndex( c => c.id === action.payload.id);
      state.cars[index] = action.payload;
      return {
        ...state,
        cars: [...state.cars]
      };
    default:
      return state;
  }
}
