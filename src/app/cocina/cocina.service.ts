import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocina } from './cocina';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const API_URL=environment.apiURL;
const cocinas = "/cocinas";

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


 /**
    * Creates a cocina
    * @param cocina The suspension which will be created
    * @returns The confirmation of the cocina creation
    */
   createCocina(cocina): Observable<Cocina> {
    return this.http.post<Cocina>(API_URL + cocinas, cocina);
}


/**
    * Returns the Observable object containing the halloffame retrieved from the API
    * @returns The halloffame
    */
   getCocina(cocinaId:number): Observable<Cocina> {
    return this.http.get<Cocina>(API_URL + cocinas + '/' + cocinaId);
}



  /**
    * Updates an halloffame
    * @param cocina The halloffame which will be update
    * @returns The confirmation of the hall's update
    */
   updateCocina(cocina: Cocina): Observable<Cocina> {
    return this.http.put<Cocina>(API_URL + cocinas + '/' + cocina.id, cocina);
}


deleteCocina(cocina: Cocina): Observable<Cocina>{
  return this.http.delete<Cocina>(API_URL + cocinas + '/' + cocina.id);
}



}