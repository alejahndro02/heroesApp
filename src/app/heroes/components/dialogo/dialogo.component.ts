import { Component, OnInit } from '@angular/core';
import { MatDialogRef      } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
})
export class DialogoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(){
    this.dialogRef.close(true)

  }
  cancelar(){
    this.dialogRef.close()
  }
}
