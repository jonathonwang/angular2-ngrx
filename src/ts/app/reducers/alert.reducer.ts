// Ngrx Imports
import { ActionReducer, Action, State } from '@ngrx/store';
// Model Imports
import { Task } from '../models/task.model';
// Task Action Type Import
import { ActionTypes } from '../actions/alert.actions';

// the initial state of the tasks
interface IAlertState {
  status: string;
  message: string;
  visible: boolean;
}
const initialState: IAlertState = {
  status: '',
  message: '',
  visible: false
};

export const alertReducer: ActionReducer<any> = (state: IAlertState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SHOW_ALERT:
      return {
        status: action.payload.status,
        message: action.payload.message,
        visible: true
      };

    case ActionTypes.HIDE_ALERT:
      return {
        status: state.status,
        message: state.message,
        visible: false
      };

    // Return state if action type is unknown
    default:
      return state;
  }
};
