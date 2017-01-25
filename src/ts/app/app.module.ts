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
// Component Imports
import { AppComponent } from './app.component';
// Reducer Imports
import { taskReducer } from './reducers/task.reducer';

const combinedReducers = StoreModule.provideStore({
  tasks: taskReducer,
});

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Store module
    combinedReducers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
