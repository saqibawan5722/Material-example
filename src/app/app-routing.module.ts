import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { Dialog1Component } from './pages/dialog/dialog1/dialog1.component';
import { InputComponent } from './pages/input/input.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main' , component: MainComponent},
  { path: 'button' , component: ButtonsComponent},
  { path: 'button-toggle' , component: ButtonToggleComponent},
  { path: 'dialog' , component: DialogComponent},
  { path: 'dialog1' , component: Dialog1Component},
  { path: 'cards' , component: CardsComponent},
  { path: 'input' , component: InputComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
