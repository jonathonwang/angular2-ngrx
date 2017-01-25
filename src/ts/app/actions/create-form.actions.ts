import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  UPDATE_CREATE_TASK_INPUT: type('[Create Form] Update Input'),
  RESET_CREATE_FORM: type('[Create Form] Reset Fields')
};

export class UpdateCreateInputAction implements Action {
  type = ActionTypes.UPDATE_CREATE_TASK_INPUT;
  constructor(public payload: { name: string, value: string }) { }
}

export class ResetCreateFormAction implements Action {
  type = ActionTypes.RESET_CREATE_FORM;
  constructor() {}
}

export type Action
  = UpdateCreateInputAction
  | ResetCreateFormAction;
