// Ngrx Imports
import { ActionReducer, Action, State } from '@ngrx/store';
// Model Imports
import { Task } from '../models/task.model';
// Task Action Type Import
import { ActionTypes } from '../actions/create-form.actions';

// the initial state of the tasks
const initialState = {
  title: '',
  status: '',
  missingFields: []
};

export const createFormReducer: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {

    case ActionTypes.UPDATE_CREATE_TASK_INPUT:
      state[action.payload.name] = action.payload.value;
      return state;

    case ActionTypes.RESET_CREATE_FORM:
      state.title = '';
      state.status = '';
      return state;

    case ActionTypes.SHOW_REQUIRED_FIELD_ERRORS:
      state.missingFields = action.payload.missingFields;
      return state;

    // Return state if action type is unknown
    default:
      return state;
  }
};
