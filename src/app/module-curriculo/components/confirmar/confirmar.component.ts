import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CurriculoResponse } from '../../interfaces/curriculo.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: []
})
export class ConfirmarComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CurriculoResponse ) { }

  ngOnInit() {
    // console.log(this.data);
    
  }

  onNoClick(){
    this.dialogRef.close();
  }
  borarCurriculo(){
    this.dialogRef.close( true );
  }
}
