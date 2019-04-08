import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suspension } from './suspension';
import { Observable } from 'rxjs';




const API_URL= "../../assets/";
const suspensiones = "suspensiones.json";

/**
* The service provider for everything related to suspension
*/
@Injectable()
export class SuspensionService {


   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of suspensiones retrieved from the API
    * @returns The list of cocinas in real time
    */
getSuspensiones(): Observable<Suspension[]>{
  return this.http.get<Suspension[]>(API_URL + suspensiones);
}


}