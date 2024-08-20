import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { count, Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  private store = inject(Store);
  count$?: Observable<number>;

  constructor() {
    this.count$ = this.store.select('counter');
    this.store
      .select((state) => state.counter)
      .subscribe((count) => {
        localStorage.setItem('counter', JSON.stringify(count));
      });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
