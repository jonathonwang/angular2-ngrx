import * as alert from '../../../app/actions/alert.actions';

describe('Alert Actions', () => {
  it('ShowAlertAction Should Have Correct Payload and Type', () => {
    const actual = new alert.ShowAlertAction({ status: 'Danger', message: 'Message' });
    const expected = { status: 'Danger', message: 'Message' };
    expect(actual.payload).toEqual(expected);
    expect(actual.type).toEqual(alert.ActionTypes.SHOW_ALERT);
  });
  it('HideAlertAction Should Have Correct Type', () => {
    const actual = new alert.HideAlertAction();
    expect(actual.type).toEqual(alert.ActionTypes.HIDE_ALERT);
  });
});
