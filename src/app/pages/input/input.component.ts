import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  form : FormGroup
  readOnly:true
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }
  
  // focusMyInput() {
  //   this.renderer.selectRootElement('#myInput').focus();
  // }

  @ViewChild("myinput") myInputField: ElementRef;
   ngAfterViewInit() {
      this.myInputField.nativeElement.focus();
}
}
