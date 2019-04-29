import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoDieta } from './tipo-dieta';

const API_URL = environment.apiURL;
const tipoDietas='/tipoDietas';
@Injectable()
export class TipoDietaService {

  constructor(private http: HttpClient) { }

  getTipoDietas(): Observable<TipoDieta[]>{
    return this.http.get<TipoDieta[]>(API_URL + tipoDietas);
  }
}
