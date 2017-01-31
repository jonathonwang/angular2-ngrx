import { createFormReducer, initialState } from '../../app/reducers/create-form.reducer';
import { ActionTypes } from '../../app/actions/create-form.actions';

describe('Create Form Reducer', () => {
  it('Should return default state given Invalid Action', () => {
    const actual = createFormReducer(initialState, { type: 'INVALID', payload: {} });
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
  it('Should Update Title Property', () => {
    const actual = createFormReducer(initialState, { type: ActionTypes.UPDATE_CREATE_TASK_INPUT, payload: { name: 'title', value: '123' } });
    const expected = { title: '123', status: '', missingFields: [] };
    expect(actual).toEqual(expected);
  });
  it('Should Update Status Property', () => {
    const actual = createFormReducer(initialState, { type: ActionTypes.UPDATE_CREATE_TASK_INPUT, payload: { name: 'status', value: 'planned' } });
    const expected = { title: '', status: 'planned', missingFields: [] };
    expect(actual).toEqual(expected);
  });
  it('Should Update Status & Title Properties', () => {
    const updatedTitleState = createFormReducer(initialState, { type: ActionTypes.UPDATE_CREATE_TASK_INPUT, payload: { name: 'title', value: '123' } });
    const actual = createFormReducer(updatedTitleState, { type: ActionTypes.UPDATE_CREATE_TASK_INPUT, payload: { name: 'status', value: 'planned' } });
    const expected = { title: '123', status: 'planned', missingFields: [] };
    expect(actual).toEqual(expected);
  });
  it('Should Reset Create Form Properties', () => {
    const updatedState = { title: '123', status: 'planned', missingFields: ['name', 'title'] };
    const actual = createFormReducer(updatedState, { type: ActionTypes.RESET_CREATE_FORM, payload: {} });
    const expected = { title: '', status: '', missingFields: [] };
    expect(actual).toEqual(expected);
  });
  it('Should Update Missing Fields Property', () => {
    const actual = createFormReducer(initialState, { type: ActionTypes.SHOW_REQUIRED_FIELD_ERRORS, payload: { missingFields: ['title', 'status'] } });
    const expected = { title: '', status: '', missingFields: ['title', 'status'] };
    expect(actual).toEqual(expected);
  });
});
