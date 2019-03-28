import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocina } from './cocina';
import { Observable } from 'rxjs';


const API_URL="../../assets";
const cocinas = "cocinas.json";

/**
* The service provider for everything related to cocina
*/
@Injectable()
export class CocinaService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

      /**
    * Returns the Observable object containing the list of cocinas retrieved from the API
    * @returns The list of cocinas in real time
    */
getCocinas(): Observable<Cocina[]>{
  return this.http.get<Cocina[]>(API_URL + cocinas);
}

}