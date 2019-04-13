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
}
