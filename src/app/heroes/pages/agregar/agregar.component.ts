import { Component, OnInit      } from '@angular/core';
import { MatDialog              } from '@angular/material/dialog';
import { MatSnackBar            } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap              } from 'rxjs';

import { Heroe, Publisher       } from '@heroes/interface/heroes.interface';
import { HeroesService          } from '@heroes/services/heroes.service';
import { DialogoComponent       } from '@dialogo/dialogo.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width:100%;
      border-radius:5px
    }
  `
  ]
})
export class AgregarComponent implements OnInit {
 publishers=[

  {
    id: 'DC Comics',
    desc:'DC - Comics'
  },

  {
    id: 'Marvel Comics',
    desc:'Marvel - Comics'
  }
]
heroeObj:Heroe={
  superhero:        '',
  publisher:        Publisher.DCComics,
  alter_ego:        '',
  first_appearance: '',
  characters:       '',
  alt_img:          ''
}

  constructor( private heroesService:HeroesService, 
               private activatedRoutes: ActivatedRoute,
               private router: Router,
               private _snackBar: MatSnackBar,
               public  dialog: MatDialog)  { }

  ngOnInit(): void {
    this.router.url.includes('editar')
    if(!this.router.url.includes('editar')){
      return
    }
    this.activatedRoutes.params
        .pipe(
          switchMap( ( { id } ) => this.heroesService.getHeroesId( id ) )
        )
        .subscribe( heroeId => this.heroeObj = heroeId)
  }
  guardarPersonaje(){
    if (this.heroeObj.superhero.trim().length === 0){
      return
    }
    if(this.heroeObj.id){
      this.heroesService.actualizarHeroe(this.heroeObj)
      .subscribe(heroeActualizado => {
        this.mostrarSnackBar('Registro Actualizado')
      })
    }else{
      this.heroesService.agregarHeroe(this.heroeObj)
        .subscribe( heroeObj => {
          this.router.navigate(['/heroes/editar', heroeObj.id])
          this.mostrarSnackBar('Registro Creado')
      })
    }
  }
  eliminarPersonaje(){
    const dialog = this.dialog.open(DialogoComponent, {
      width:'450px', 
      data: {...this.heroeObj}
    })
    dialog.afterClosed().subscribe(
      (result)=>{
        if(result){
          this.heroesService.eliminarHeroe(this.heroeObj.id!)
          .subscribe(resp => {
            this.router.navigate(['/heroes'])
          })
        }
      }
    )
  }
  mostrarSnackBar(msj:string){
    this._snackBar.open(msj, 'OK!!', {
      duration:2500
    })
  }
}

