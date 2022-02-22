import { Component, Inject, OnInit     } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Heroe                         } from '@heroes/interface/heroes.interface';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
})
export class DialogoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe,) { }

  ngOnInit(): void {
  }
  confirmar(){
    this.dialogRef.close(true)

  }
  cancelar(){
    this.dialogRef.close()
  }
}
