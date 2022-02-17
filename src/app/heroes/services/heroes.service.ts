import { Injectable  } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Heroe       } from '@interface/heroes.interface';
import { Observable  } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private dataUrl: string = environment.dataUrl

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.dataUrl}/heroes`)
  }
  getHeroesId( id:string ):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.dataUrl}/heroes/${ id }`)
  }
  getSugerencias(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.dataUrl}/heroes?q=${termino}&_limit=5`)
  }
}
