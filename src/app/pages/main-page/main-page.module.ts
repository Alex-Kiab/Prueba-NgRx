import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { todosReducer, todosStateFeatureKey } from '../state';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule.forFeature(todosStateFeatureKey, todosReducer),
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
