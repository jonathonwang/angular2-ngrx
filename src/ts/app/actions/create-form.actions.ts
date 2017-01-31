import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  UPDATE_CREATE_TASK_INPUT: type('[Create Form] Update Input'),
  RESET_CREATE_FORM: type('[Create Form] Reset Fields'),
  SHOW_REQUIRED_FIELD_ERRORS: type('[Create Form] Show Errors'),
  RESET_REQUIRED_FIELD_ERRORS: type('[CreateForm] Hide Errors')
};

export class UpdateCreateInputAction implements Action {
  type = ActionTypes.UPDATE_CREATE_TASK_INPUT;
  constructor(public payload: { name: string, value: string }) { }
}

export class ResetCreateFormAction implements Action {
  type = ActionTypes.RESET_CREATE_FORM;
  constructor() { }
}

export class ShowErrorOnRequiredFieldsAction implements Action {
  type = ActionTypes.SHOW_REQUIRED_FIELD_ERRORS;
  constructor(public payload: { missingFields: Array<string> }) { }
}

export type Action
  = UpdateCreateInputAction
  | ResetCreateFormAction
  | ShowErrorOnRequiredFieldsAction;
