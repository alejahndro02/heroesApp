import { Input             } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Heroe             } from '@interface/heroes.interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [
    `mat-card{
      margin-top:20px
    }`
  ]
})
export class TarjetaComponent implements OnInit {
  @Input() superHeroe! : Heroe;
  constructor() { }
  ngOnInit(): void {
  }

}
