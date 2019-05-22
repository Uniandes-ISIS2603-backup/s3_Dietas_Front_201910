import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Dia} from './dia';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;
const dias = '/dias';


@Injectable()
export class DiaService {
  


  constructor(private http: HttpClient) { }

  getDias(): Observable<Dia[]>{
    return this.http.get<Dia[]>(API_URL + dias);
  }

  createDia(dia:Dia):Observable<Dia>{
    return this.http.post<Dia>(API_URL + dia, dia);
  }

  getDia(diaId:number):Observable<Dia>{
    return this.http.get<Dia>(API_URL+ dias + '/' + diaId);
  }

  /**
   * Método que actualiza un dia
   * @param dia dia el cual se va a actualizar
   * @returns la confirmación del cambio
   */
  updateDia(dia : Dia):Observable<Dia>{
    return this.http.put<Dia>(API_URL+ dias + '/'+  dia.id,dia);
  }
}
