import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacionycomentario} from './calificacionycomentario';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL=environment.apiURL;
const calificacionesycomentarios = "/calificacionesYComentarios";
const calificacionesycomentarios2 = "/calificacionycomentario";
const personas='/personas';

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
  return this.http.get<Calificacionycomentario[]>(API_URL + calificacionesycomentarios2);
 
}

//getCalificacionYComentarioDePersona(hallId:number):Observable<Calificacionycomentario[]>{
//  console.log(this.http.get<Calificacionycomentario[]>(`${API_URL}${personas}/${hallId}${calificacionesycomentarios}`)[0]);
//  return this.http.get<Calificacionycomentario[]>(`${API_URL}${personas}/${hallId}${calificacionesycomentarios}`);
//  
//}
 /**
    * Creates a cocina
    * @param cocina The suspension which will be created
    * @returns The confirmation of the cocina creation
    */
   createCalificacionycomentario(cocina): Observable<Calificacionycomentario> {
    return this.http.post<Calificacionycomentario>(API_URL + calificacionesycomentarios, cocina);
}

/**
    * Returns the Observable object containing the halloffame retrieved from the API
    * @returns The halloffame
    */
   getCalificacionycomentario(calificacionycomentarioId:number): Observable<Calificacionycomentario> {
    return this.http.get<Calificacionycomentario>(API_URL + calificacionesycomentarios + '/' + calificacionycomentarioId);
}



 /**
    * Updates an halloffame
    * @param cocina The halloffame which will be update
    * @returns The confirmation of the hall's update
    */
   updateCalificacionycomentario(calificacionycomentario: Calificacionycomentario): Observable<Calificacionycomentario> {
    return this.http.put<Calificacionycomentario>(API_URL + calificacionesycomentarios + '/' + calificacionycomentario.id, calificacionycomentario);
}


}