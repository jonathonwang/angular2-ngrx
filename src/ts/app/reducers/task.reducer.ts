import { ActionReducer, Action, State } from '@ngrx/store';
import { Task } from '../models/task.model';

// Task Action Type Import
import { CREATE_TASK } from '../action-types/task.action-types';
// Task Action Import
import { createTask } from '../actions/task.actions';


// the initial state of the tasks
const initialState = [];

export const taskReducer: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {
    case CREATE_TASK:
      const task: Task = action.payload;
      createTask(state, task);
    // Return state if action type is unknown
    default:
      return state;
  }
};
