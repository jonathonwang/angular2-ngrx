import * as createForm from '../../app/actions/create-form.actions';

describe('Create Form Actions', () => {
  it('UpdateCreateInputAction Should Have Correct Payload and Type', () => {
    const actual = new createForm.UpdateCreateInputAction({ name: 'title', value: '123' });
    const expectedPayload = { name: 'title', value: '123' };
    expect(actual.payload).toEqual(expectedPayload);
    expect(actual.type).toEqual(createForm.ActionTypes.UPDATE_CREATE_TASK_INPUT);
  });
  it('ResetCreateFormAction Should Have Correct Type', () => {
    const actual = new createForm.ResetCreateFormAction();
    expect(actual.type).toEqual(createForm.ActionTypes.RESET_CREATE_FORM);
  });
  it('ShowErrorOnRequiredFieldsAction Should Have Correct Payload and Type', () => {
    const actual = new createForm.ShowErrorOnRequiredFieldsAction({ missingFields: ['title', 'status'] });
    const expectedPayload = { missingFields: ['title', 'status'] };
    expect(actual.type).toEqual(createForm.ActionTypes.SHOW_REQUIRED_FIELD_ERRORS);
    expect(actual.payload).toEqual(expectedPayload);
  });
});
