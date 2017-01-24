import { ActionReducer, Action, State } from '@ngrx/store';
import { Task } from '../models/task.model';

// Task Action Import
import { CREATE_TASK } from '../actions/task.actions';
// the initial state of the tasks
// const initialState: State<any> = [];
const initialState = [];

export const taskReducer: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {
    case CREATE_TASK:
      const task: Task = action.payload;
      console.log(task);
    // Return state if action type is unknown
    default:
      return state;
  }
};
