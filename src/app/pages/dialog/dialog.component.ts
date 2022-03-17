import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Data, Router } from '@angular/router';
import { Dialog1Component } from './dialog1/dialog1.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  name :string;
  animal:string;
  constructor(public dialog: MatDialog , public router : Router) { }

  ngOnInit(): void {
  }

  // this is simple example of dialog
  openDialog(){
      this.dialog.open(Dialog1Component).afterClosed().subscribe(res=>{
        console.log(res);  
      })
  }

  //  this is example of dialog with data 
 
  openDialog1(): void {
    const dialogRef = this.dialog.open(Dialog1Component, {
      //  this is option in dialog

      width: '300px',
      // maxWidth : '300px',
      // minWidth: '300px',
      height: '300px',
      // maxHeight : '300px',
      // minHeight : '200px',

      // hasBackdrop : false,    // back pr jo dark sa color ataa he
      disableClose : true,       // jab tak ham khud dialog close nahi kray gay tab taak close nahi hu
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
