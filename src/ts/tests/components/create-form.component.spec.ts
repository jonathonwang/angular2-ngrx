// Angular Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Angular Testing Imports
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { TestBed, async } from '@angular/core/testing';

// Component Import
import { CreateFormComponent } from '../../app/components/create-form.component';
// Store Import
import { ProvideStoreModule } from '../../app/app.module';

describe('Create Form Component', () => {
  let component: CreateFormComponent;
  let element: HTMLElement;

  beforeEach(async(() => {
    // Reset Testing Environment
    TestBed.resetTestingModule();
    TestBed.resetTestEnvironment();
    // Configure Testing Environment
    TestBed.configureTestingModule({
      declarations: [CreateFormComponent],
      imports: [ProvideStoreModule],
      providers: [
        BrowserModule,
        FormsModule,
        HttpModule
      ]
    });
    // Initialize Testing Environment
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    // Compile Component
    // TestBed.compileComponents();
    // const fixture = TestBed.createComponent(CreateFormComponent);
    // // Detect Changes and update Component
    // fixture.detectChanges();
    // // Hoist Component and element to be used in tests
    // component = fixture.componentInstance;
    // element = fixture.nativeElement;
  }));

  it('Should Have a Defined Component', () => {
    // expect(component).toBeDefined();
    // console.log(component);
  });
});
