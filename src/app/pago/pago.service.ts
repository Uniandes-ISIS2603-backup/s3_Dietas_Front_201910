import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pago } from './pago';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const API_URL=environment.apiURL;
const pagos = "/pagos";
const halls='/personas';

/**
* The service provider for everything related to pago
*/
@Injectable()
export class PagoService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of pagos retrieved from the API
    * @returns The list of pagos in real time
    */
getPagos(): Observable<Pago[]>{
  return this.http.get<Pago[]>(API_URL + pagos);
}

getPagosDePersonas(personaId:number):Observable<Pago[]>{
  return this.http.get<Pago[]>(`${API_URL}${halls}/${personaId}${pagos}`);
  
}
 /**
    * Creates a pago
    * @param pago The suspension which will be created
    * @returns The confirmation of the pago creation
    */
   createPago(pago): Observable<Pago> {
    return this.http.post<Pago>(API_URL + pagos, pago);
}


/**
    * Returns the Observable object containing the pago retrieved from the API
    * @returns The pago
    */
   getPago(pagoId:number): Observable<Pago> {
    return this.http.get<Pago>(API_URL + pagos + '/' + pagoId);
}




  /**
    * Updates a pago
    * @param pago The pago which will be update
    * @returns The confirmation of the pago's update
    */
   updatePago(pago: Pago): Observable<Pago> {
    return this.http.put<Pago>(API_URL + pagos + '/' + pago.id, pago);
}

/**
    * Deletes a pago
    * @param pagoId The pago's id
    * @returns True if the pago was deleted, false otherwise
    */
   deletePago(pagoId): Observable<Pago> {
    return this.http.delete<Pago>(API_URL + pagos + '/' + pagoId);
}
}