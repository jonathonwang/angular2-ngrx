import { alertReducer } from '../../app/reducers/alert.reducer';
import { ActionTypes } from '../../app/actions/alert.actions';

const initialState = { status: '', message: '', visible: false };
describe('Alert Reducer', () => {
  it('Should return default state given Invalid Action', () => {
    const actual = alertReducer(initialState, { type: 'INVALID', payload: {} });
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
  it('Should return Danger Status, Message, and become Visible', () => {
    const actual = alertReducer(initialState, { type: ActionTypes.SHOW_ALERT, payload: { status: 'Danger', message: 'Something Went Wrong' } });
    const expected = { status: 'Danger', message: 'Something Went Wrong', visible: true };
    expect(actual).toEqual(expected);
  });
  it('Should return state with visible false', () => {
    const visibleAlert = { status: '', message: '', visible: true  };
    const actual = alertReducer(visibleAlert, { type: ActionTypes.HIDE_ALERT, payload: {} });
    const expected = { status: '', message: '', visible: false };
    expect(actual).toEqual(expected);
  });
});
