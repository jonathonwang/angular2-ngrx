// NPM Dependency Imports
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// Action Imports
import * as task from '../actions/task.actions';
// Model Imports
import { Task } from '../models/task.model';

interface IAppState {
  tasks: Array<Task>;
}

@Component({
  selector: 'app',
  templateUrl: './app.template.html'
})

export class AppComponent {
  public tasks: Observable<Array<Task>>;

  constructor (private store: Store<IAppState>) {
    this.tasks = this.store.select('tasks');
  }
  ngOnInit() {
  }
}
