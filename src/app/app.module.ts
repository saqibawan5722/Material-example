import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//  import the mat module
import { MatModule } from './mat/mat.module';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { Dialog1Component } from './pages/dialog/dialog1/dialog1.component';
import { CardsComponent } from './pages/cards/cards.component';
import { InputComponent } from './pages/input/input.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    DialogComponent,
    Dialog1Component,
    CardsComponent,
    InputComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    

    
    ReactiveFormsModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
