// Angular Testing Module Imports
import { TestBed, async } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { declarations, imports, providers } from '../../../app/app.module';

// Component Import
import { AlertComponent } from '../../../app/components/alert.component';

describe('Alert Component', () => {
  let component: AlertComponent;
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
    const fixture = TestBed.createComponent(AlertComponent);
    // Detect Changes and update Component
    fixture.detectChanges();
    // Hoist Component and element to be used in tests
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  // Begin Testing
  it('Should Have a Defined Component', () => {
    expect(component).toBeDefined();
  });
});
