import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';

export const initialState = JSON.parse(localStorage.getItem('counter') ?? '0');
// export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => (state > 0 ? state - 1 : state)),
  on(reset, (state) => 0)
);
