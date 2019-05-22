import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Semana } from './semana';

const API_URL = environment.apiURL;
const semanas ="/semanas";

@Injectable({
  providedIn: 'root'
})
export class SemanaService {

  constructor(private http: HttpClient) { }
  getDias():Observable<Semana[]>{
    return this.http.get<Semana[]>(API_URL + semanas);
  }

  createSemana(semana:Semana):Observable<Semana>
  {
    return this.http.post<Semana>(API_URL + semanas,semana);
  }
  updateSemana(semana:Semana):Observable<Semana>{
    return this.http.put<Semana>(API_URL + semanas + '/' + semana.id, semana);
  }
}
