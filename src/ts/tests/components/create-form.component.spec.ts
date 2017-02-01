// Angular Testing Module Imports
import { TestBed, async } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { declarations, imports, providers } from '../../app/app.module';

// Component Import
import { CreateFormComponent } from '../../app/components/create-form.component';

describe('CreateForm Component', () => {
  let component: CreateFormComponent;
  let element: HTMLElement;

  beforeAll(() => {
    // Reset Testing Environment
    TestBed.resetTestEnvironment();
    // Initialize Testing Environment
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });

  // Async Before Each
  beforeEach(async(() => {
    TestBed.resetTestingModule();
    // Configure Testing Environment
    TestBed.configureTestingModule({
      declarations,
      imports,
      providers
    }).compileComponents();
  }));

  // Synchronous Before Each
  beforeEach(() => {
    const fixture = TestBed.createComponent(CreateFormComponent);
    // // Detect Changes and update Component
    // fixture.detectChanges();
    // // Hoist Component and element to be used in tests
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  // Begin Testing Properties
  it('Should Have a Defined Component', () => {
    expect(component).toBeDefined();
  });
  it('Should Have A createForm Property', () => {
    expect(component.createForm).toBeDefined();
    const expected = { title: '', status: '', missingFields: [] };
    expect(component.createForm).toEqual(expected);
  });
  it('Should Have A subscription Property', () => {
    expect(component.subscription).toBeDefined();
  });
  // Begin Testing Methods
  it('Should Update createForm Title', () => {
    component.updateInput({ target: { name: 'title', value: '123' } });
    const expected = { title: '123', status: '', missingFields: [] };
    expect(component.createForm).toEqual(expected);
  });
  it('Should Update createForm Status', () => {
    component.updateInput({ target: { name: 'status', value: 'planned' } });
    const expected = { title: '', status: 'planned', missingFields: [] };
    expect(component.createForm).toEqual(expected);
  });
  it('Should Update createForm Title & Status', () => {
    component.updateInput({ target: { name: 'title', value: '123' } });
    component.updateInput({ target: { name: 'status', value: 'planned' } });
    const expected = { title: '123', status: 'planned', missingFields: [] };
    expect(component.createForm).toEqual(expected);
  });
  it('Should Update missingFields Property with Title & Status', () => {
    component.attemptCreateTask(new Event('submit'));
    const expected = { title: '', status: '', missingFields: ['title', 'status'] };
    expect(component.createForm).toEqual(expected);
  });
  it('Should Update missingFields Property with Title', () => {
    component.updateInput({ target: { name: 'title', value: '123' } });
    component.attemptCreateTask(new Event('submit'));
    const expected = { title: '123', status: '', missingFields: ['status'] };
    expect(component.createForm).toEqual(expected);
  });
  it('Should Update missingFields Property with Status', () => {
    component.updateInput({ target: { name: 'status', value: 'planned' } });
    component.attemptCreateTask(new Event('submit'));
    const expected = { title: '', status: 'planned', missingFields: ['title'] };
    expect(component.createForm).toEqual(expected);
  });
  it('Should Return missingFields Array Containing Title & Status', () => {
    const actual = component.getMissingFields();
    const expected = ['title', 'status'];
    expect(actual).toEqual(expected);
  });
  it('Should Return missingFields Array Containing Title', () => {
    component.updateInput({ target: { name: 'status', value: 'planned' } });
    const actual = component.getMissingFields();
    const expected = ['title'];
    expect(actual).toEqual(expected);
  });
  it('Should Return missingFields Array Containing Status', () => {
    component.updateInput({ target: { name: 'title', value: '123' } });
    const actual = component.getMissingFields();
    const expected = ['status'];
    expect(actual).toEqual(expected);
  });
  it('Should Return Formatted Missing Fields Message with Two Fields', () => {
    const actual = component.formatMissingFieldsMessage(['1', '2']);
    const expected = '1 And 2 Are Required';
    expect(actual).toEqual(expected);
  });
  it('Should Return Formatted Missing Fields Message with One Field', () => {
    const actual = component.formatMissingFieldsMessage(['1']);
    const expected = '1 Is Required';
    expect(actual).toEqual(expected);
  });
});
