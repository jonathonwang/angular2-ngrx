// NPM Dependency Imports
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/subscription';

import { Task } from '../models/task.model';

// Action Imports
import * as createForm from '../actions/create-form.actions';
import * as task from '../actions/task.actions';
import * as alert from '../actions/alert.actions';

interface ICreateFormState {
  title: string;
  status: string;
}

@Component({
  selector: 'create-form',
  templateUrl: './create-form.template.html'
})

export class CreateFormComponent {
  public subscription: Subscription;
  public createForm: ICreateFormState;

  constructor (private store: Store<ICreateFormState>) {
    this.subscription = this.store.select('createForm').subscribe((createForm) => this.createForm = createForm as ICreateFormState);
  }
  updateInput(event: any): void {
    const name = event.target.name;
    const value = event.target.value;
    this.store.dispatch(new createForm.UpdateCreateInputAction({ name, value }));
  }
  createTask(event: any): void {
    event.preventDefault();
    if (this.createForm.title.length > 0 && this.createForm.status.length > 0) {
      this.store.dispatch(new task.CreateTaskAction(new Task({ title: this.createForm.title, status: this.createForm.status })));
      this.store.dispatch(new createForm.ResetCreateFormAction());
      this.store.dispatch(new alert.ShowAlertAction({ status: 'success', message: 'Task Successfully Created' }));
    } else {
      this.store.dispatch(new alert.ShowAlertAction({ status: 'danger', message: 'Title and Status are Required' }));
    }
  }
}
