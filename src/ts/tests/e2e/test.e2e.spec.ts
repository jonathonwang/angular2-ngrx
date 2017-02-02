import { browser, element, by } from 'protractor';
import {} from 'jasmine';

describe('Angular Ngrx App', () => {
  beforeEach(() => {
    browser.get('/');
  });
  it('Has Correct Page Title', () => {
    const expectedTitle = 'Angular2 Ngrx';
    browser.getTitle().then((actualTitle) => {
      expect(actualTitle).toEqual(expectedTitle);
    });
  });
  it('Renders Create Form', () => {
    const createForm = element(by.tagName('create-form'));
    expect(createForm.isPresent()).toEqual(true);
  });
  it('Create Form contains Input, Select, and Submit fields', () => {
    const createForm = element(by.tagName('create-form'));
    const textInput = createForm.element(by.name('title'));
    const selectField = createForm.element(by.name('status'));
    const submitButton = createForm.element(by.css('.btn'));
    expect(createForm.isPresent()).toEqual(true);
    expect(textInput.isPresent()).toEqual(true);
    expect(selectField.isPresent()).toEqual(true);
    expect(submitButton.isPresent()).toEqual(true);
  });
  it('Should Show Error on Submit when Required Fields are Missing', () => {
    const submitButton = element(by.css('.btn'));
    const alert = element(by.css('.alert'));
    const textInput = element(by.name('title'));
    const selectInput = element(by.name('title'));
    const hasClass = (classes, className) => classes.indexOf(className) > -1 ? true : false;
    submitButton.click();
    alert.getAttribute('class').then((classes) => {
      let alertClasses = classes.split(' ');
      expect(hasClass(alertClasses, 'show')).toEqual(true);
    });
    alert.getText().then((text) => {
      const expected = 'Danger! Title And Status Are Required';
      const actual = text;
      expect(actual.includes(expected)).toEqual(true);
    });
  });
});



// element(by.model('todoList.todoText')).sendKeys('write first protractor test');
// element(by.css('[value="add"]')).click();
//
// let todoList = element.all(by.repeater('todo in todoList.todos'));
// expect(todoList.count()).toEqual(3);
// expect(todoList.get(2).getText()).toEqual('write first protractor test');
//
// // You wrote your first test, cross it off the list
// todoList.get(2).element(by.css('input')).click();
// let completedAmount = element.all(by.css('.done-true'));
// expect(completedAmount.count()).toEqual(2);
