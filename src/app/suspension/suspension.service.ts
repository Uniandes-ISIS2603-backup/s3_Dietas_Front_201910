import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suspension } from './suspension';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';




const API_URL= environment.apiURL;
const suspensiones = "/suspensiones";

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


   /**
    * Creates an suspension
    * @param suspension The suspension which will be created
    * @returns The confirmation of the suspensio creation
    */
   createSuspension(suspension): Observable<Suspension> {
    return this.http.post<Suspension>(API_URL + suspensiones, suspension);
}


/**
    * Returns the Observable object containing the halloffame retrieved from the API
    * @returns The suspension
    */
   getSuspension(suspensionId:number): Observable<Suspension> {
    return this.http.get<Suspension>(API_URL + suspensiones + '/' + suspensionId);
}




  /**
    * Updates an Suspension
    * @param suspension The Suspension which will be update
    * @returns The confirmation of the Suspension's update
    */
   updateSuspension(suspension: Suspension): Observable<Suspension> {
    return this.http.put<Suspension>(API_URL + suspensiones + '/' + suspension.id, suspension);
}



}