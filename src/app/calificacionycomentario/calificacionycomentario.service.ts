import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacionycomentario} from './calificacionycomentario';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL=environment.apiURL;
const calificacionesycomentarios = "/calificacionesycomentarios"; 

/**
* The service provider for everything related to Calificacionycomentario
*/
@Injectable()
export class CalificacionycomentarioService {


    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }


    /**
    * Returns the Observable object containing the list of cocinas retrieved from the API
    * @returns The list of cocinas in real time
    */
getCalificacionesycomentarios(): Observable<Calificacionycomentario[]>{
  return this.http.get<Calificacionycomentario[]>(API_URL + calificacionesycomentarios);
}



 /**
    * Creates a cocina
    * @param calificacionycomentario The suspension which will be created
    * @returns The confirmation of the cocina creation
    */
   createCalificacionycomentario(calificacionycomentario): Observable<Calificacionycomentario> {
    return this.http.post<Calificacionycomentario>(API_URL + calificacionesycomentarios, calificacionycomentario);
}

}