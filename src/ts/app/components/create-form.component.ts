// NPM Dependency Imports
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/subscription';

// Model Imports
import { Task } from '../models/task.model';

// Action Imports
import * as createForm from '../actions/create-form.actions';
import * as task from '../actions/task.actions';
import * as alert from '../actions/alert.actions';

interface ICreateFormState {
  title: string;
  status: string;
  missingFields: Array<string>;
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


  public updateInput(event: any): void {
    const name = event.target.name;
    const value = event.target.value;
    this.store.dispatch(new createForm.UpdateCreateInputAction({ name, value }));
  }
  public createTask() {
    this.store.dispatch(new task.CreateTaskAction(new Task({ title: this.createForm.title, status: this.createForm.status })));
    // this.store.dispatch(new alert.ShowAlertAction({ status: 'success', message: 'Task Successfully Created' }));
    this.store.dispatch(new alert.HideAlertAction());
    this.store.dispatch(new createForm.ResetCreateFormAction());
  }
  public failCreateTask(missingFields: Array<string>): void {
    const missingFieldsMessage = this.formatMissingFieldsMessage(missingFields);
    this.store.dispatch(new createForm.ShowErrorOnRequiredFieldsAction({ missingFields }));
    this.store.dispatch(new alert.ShowAlertAction({ status: 'danger', message: missingFieldsMessage}));
  }
  public attemptCreateTask(event: any): void {
    event.preventDefault();
    const missingFields = this.getMissingFields();
    if (missingFields.length === 0) {
      this.createTask();
    } else {
      this.failCreateTask(missingFields);
    }
  }


  // Helpers
  public formatMissingFieldsMessage(missingFields: Array<string>): string {
    let missingFieldsMessage = '';
    missingFields.map((field) => {
      if (missingFields.indexOf(field) !== missingFields.length - 1) {
        missingFieldsMessage += `${field} And `;
      } else {
        missingFieldsMessage += field;
        missingFields.length > 1 ? missingFieldsMessage += ' Are' : missingFieldsMessage += ' Is';
        missingFieldsMessage += ' Required';
      }
    });
    return missingFieldsMessage;
  }
  // Check HTML for input fields that contain [required] attribute
  public getMissingFields(): Array<string> {
    const elementList = document.querySelectorAll('#create-form [required]');
    let inputFields = [].slice.call(elementList);
    const requiredFields = inputFields.map((field) => field.name);
    return requiredFields.filter((field) => {
      if (!this.createForm[field]) return field;
    });
  }

}
