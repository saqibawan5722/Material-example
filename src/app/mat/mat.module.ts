import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// use material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



//  cretae variable for save exports and import any time
const material= [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatBadgeModule,
  MatDialogModule,
  MatFormFieldModule,
  FormsModule,
  MatInputModule
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // use for material
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    material,
  ],

  exports:[
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule
    
    material

  ]
})
export class MatModule { }
