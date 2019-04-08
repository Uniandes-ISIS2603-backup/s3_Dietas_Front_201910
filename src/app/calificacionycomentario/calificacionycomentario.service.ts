import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacionycomentario} from './calificacionycomentario';
import { Observable } from 'rxjs';

const API_URL="../../assets/";
const calificacionesycomentarios = "calificacionesycomentarios.json";

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

}