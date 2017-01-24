// NPM Dependency Imports
import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

// Action Imports
import { CREATE_TASK } from './actions/task.actions';
// Model Imports
import { Task } from './models/task.model';
// Api Import
import { api } from './app.api';

interface AppState {
  tasks: Array<Task>;
}

@Component({
  selector: 'app',
  templateUrl: './app.template.html'
})

export class AppComponent {
  public tasks: Observable<Array<Task>>;
  private subscription: Subscription;

  constructor (private store: Store<AppState>) {
    this.subscription = store.select('tasks').subscribe((tasks: Observable<Array<Task>>) => this.tasks = tasks);
  }
  ngOnInit() {
    console.log(this.tasks);
    this.store.dispatch({ type: CREATE_TASK, payload: '123' });
  }
}
