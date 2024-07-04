import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageModule } from './pages/main-page/main-page.module';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { todosReducer } from './pages/state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
