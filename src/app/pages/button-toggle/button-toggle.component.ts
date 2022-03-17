import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  
  fontStyleControl = new FormControl();
  fontStyle?: string;
  constructor() { }


  togglebutton(val){
     console.log(val.checked)
  }


  ngOnInit(): void {
  }

}
