// Angular Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Angular Testing Imports
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { TestBed, getTestBed, async } from '@angular/core/testing';

// Component Import
import { AlertComponent } from '../../app/components/alert.component';
// Store Import
import { ProvideStoreModule } from '../../app/app.module';

describe('Alert Component', () => {
  let component: AlertComponent;
  let element: HTMLElement;

  beforeEach(async(() => {
    // Reset Testing Environment
    TestBed.resetTestingModule();
    TestBed.resetTestEnvironment();
    // Configure Testing Enforionment
    TestBed.configureTestingModule({
      declarations: [AlertComponent],
      imports: [ProvideStoreModule],
      providers: [
        BrowserModule,
        FormsModule,
        HttpModule
      ]
    });
    // Initialize Testing Environment
    getTestBed().initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.compileComponents();
    const fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  }));

  it('Should have a defined component', () => {
    expect(component).toBeDefined();
  });
});
