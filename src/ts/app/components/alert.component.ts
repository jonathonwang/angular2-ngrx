// NPM Dependency Imports
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/subscription';

import { Task } from '../models/task.model';

// Action Imports
import * as createForm from '../actions/create-form.actions';
import * as alert from '../actions/alert.actions';

interface IAlertState {
  status: string;
  message: string;
  visible: boolean;
}

@Component({
  selector: 'alert',
  templateUrl: './alert.template.html'
})

export class AlertComponent {
  public subscription: Subscription;
  public alert: Observable<IAlertState>;

  constructor (private store: Store<IAlertState>) {
    this.subscription = this.store.select('alert').subscribe((alert) => this.alert = alert as Observable<IAlertState>);
  }

  closeAlert(event: Event): void {
    event.preventDefault();
    this.store.dispatch(new alert.HideAlertAction());
  }
}
