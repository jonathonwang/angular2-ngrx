// Ngrx Imports
import { ActionReducer, Action, State } from '@ngrx/store';
// Model Imports
import { Task } from '../models/task.model';
// Task Action Type Import
import { ActionTypes } from '../actions/alert.actions';

// the initial state of the tasks
const initialState = {
  status: '',
  message: '',
  visible: false
};

export const alertReducer: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SHOW_ALERT:
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.visible = true;
      return state;

    case ActionTypes.HIDE_ALERT:
      state.visible = false;
      return state;

    // Return state if action type is unknown
    default:
      return state;
  }
};
