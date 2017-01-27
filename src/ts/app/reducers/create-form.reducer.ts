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
      return {
        title: action.payload.name === 'title' ? action.payload.value : state.title,
        status: action.payload.name === 'status' ? action.payload.value : state.status,
        missingFields: state.missingFields
      };

    case ActionTypes.RESET_CREATE_FORM:
      return {
        title: '',
        status: '',
        missingFields: []
      };

    case ActionTypes.SHOW_REQUIRED_FIELD_ERRORS:
      return {
        title: state.title,
        status: state.status,
        missingFields: []
      };

    // Return state if action type is unknown
    default:
      return state;
  }
};
