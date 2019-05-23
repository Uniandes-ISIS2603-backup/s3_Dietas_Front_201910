import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { QuejaYReclamo } from './quejayreclamo';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';


const API_URL = environment.apiURL;

const quejas = '/quejasYReclamos';
const personas='/personas';
@Injectable()
export class QuejaYReclamoService {

/**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

       getQuejas() : Observable<QuejaYReclamo[]> {
        return this.http.get<QuejaYReclamo[]>(API_URL + quejas);
    }

   getQuejasDePersonas(personaId:number):Observable<QuejaYReclamo[]>{
        console.log(`${API_URL}${personas}/${personaId}${quejas}`);
       return (Observable<QuejaYReclamo[]>)this.http.get<QuejaYReclamo[]>(`${API_URL}${personas}/${personaId}${quejas}`);
   }
    /**
    * Creates an queja
    * @param queja The halloffame which will be created
    * @returns The confirmation of the queja's creation
    */
   createQueja(queja:QuejaYReclamo): Observable<QuejaYReclamo> {
    return this.http.post<QuejaYReclamo>(API_URL + quejas, queja);
}
/**
    * Returns the Observable object containing the halloffame retrieved from the API
    * @returns The halloffame
    */
   getQueja(queja:number): Observable<QuejaYReclamo> {
    return this.http.get<QuejaYReclamo>(API_URL + quejas + '/' + queja);
}
  /**
    * Updates an halloffame
    * @param queja The halloffame which will be update
    * @returns The confirmation of the queja's update
    */
   updateQueja(queja: QuejaYReclamo): Observable<QuejaYReclamo> {
    return this.http.put<QuejaYReclamo>(API_URL + quejas + '/' + queja.id, queja);
}
}