import { Action } from '@ngrx/store';
import { type } from '../util';

import { Task } from '../models/task.model';

export const ActionTypes = {
  CREATE_TASK: 'CREATE_TASK',
};

export class CreateTaskAction implements Action {
  type = ActionTypes.CREATE_TASK;
  constructor (public payload: Task) { }
}

export type Actions
  = CreateTaskAction;
