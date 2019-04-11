import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{QuejaYReclamo} from './quejaYReclamo';
import{Observable} from'rxjs';

import { environment } from '../../environments/environment';


const API_URL = environment.apiURL;

const quejas = '/quejasYReclamos';


@Injectable()
export class QuejaYReclamoService {

  constructor(private http: HttpClient) { }
 
  getQuejasYReclamos():Observable<QuejaYReclamo[]>{
    return this.http.get<QuejaYReclamo[]>(API_URL+quejas);
  }
     /**
    * Creates an Persona
    * @param persona The persona which will be created
    * @returns The confirmation of the persona's creation
    */
   createQuejaYReclamo(queja:QuejaYReclamo): Observable<QuejaYReclamo> {
    return this.http.post<QuejaYReclamo>(API_URL + quejas, queja);
   }

   /**
    * Updates an halloffame
    * @param halloffame The halloffame which will be update
    * @returns The confirmation of the hall's update
    */
   updateHalloffame(queja: QuejaYReclamo): Observable<QuejaYReclamo> {
    return this.http.put<QuejaYReclamo>(API_URL + quejas + '/' + queja.id, queja);
}
}