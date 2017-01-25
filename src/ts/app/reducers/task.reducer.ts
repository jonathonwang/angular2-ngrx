// Ngrx Imports
import { ActionReducer, Action, State } from '@ngrx/store';
// Model Imports
import { Task } from '../models/task.model';
// Task Action Type Import
import { ActionTypes } from '../actions/task.actions';

// the initial state of the tasks
const initialState = [];

export const taskReducer: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.CREATE_TASK:
      const task: Task = action.payload;
      return [...state, task];
    // Return state if action type is unknown
    default:
      return state;
  }
};
