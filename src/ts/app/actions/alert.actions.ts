import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  SHOW_ALERT: type('[Alert] Display Alert'),
  HIDE_ALERT: type('[Alert] Hide Alert')
};

export class ShowAlertAction implements Action {
  type = ActionTypes.SHOW_ALERT;
  constructor(public payload: { status: string, message: string }) { }
}

export class HideAlertAction implements Action {
  type = ActionTypes.HIDE_ALERT;
}

export type Action
  = ShowAlertAction
  | HideAlertAction;
