import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.scss']
})
export class Dialog1Component implements OnInit {

  constructor(public router : Router,  public dialogRef: MatDialogRef<Dialog1Component>,
    @Inject(MAT_DIALOG_DATA) public data,) { }

  
  ngOnInit(): void {
  }

  onClick(){
    this.router.navigateByUrl('main')
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
