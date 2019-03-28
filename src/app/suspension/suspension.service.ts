import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suspension } from './suspension';
import { Observable } from 'rxjs';




const API_URL= "../../assets";
const suspensiones = "suspensiones.json";


@Injectable()
export class SuspensionService {

  constructor(private http: HttpClient) { }

getSuspensiones(): Observable<Suspension[]>{
  return this.http.get<Suspension[]>(API_URL + suspensiones);
}


}