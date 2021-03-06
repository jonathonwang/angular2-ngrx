// NPM Dependency Imports
// =======================================================
// Ngrx Imports
import { StoreModule } from '@ngrx/store';
// Angular2 Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// =======================================================
// Container Imports
import { AppComponent } from './containers/app.component';
// Component Imports
import { CreateFormComponent } from './components/create-form.component';
import { AlertComponent } from './components/alert.component';
// Reducer Imports
import { taskReducer } from './reducers/task.reducer';
import { createFormReducer } from './reducers/create-form.reducer';
import { alertReducer } from './reducers/alert.reducer';

export const declarations = [
  AppComponent,
  CreateFormComponent,
  AlertComponent
];

export const ProvideStoreModule = StoreModule.provideStore({
  tasks: taskReducer,
  createForm: createFormReducer,
  alert: alertReducer
});

export const imports = [
  BrowserModule,
  FormsModule,
  HttpModule,
  // Store module
  ProvideStoreModule
];

export const providers = [];

@NgModule({
  declarations,
  imports,
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
