import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Foto } from './foto';

import { Observable } from 'rxjs';

const API_URL = environment.apiURL;
const fotos = '/fotos';
const personas='/personas';
@Injectable()
export class FotoService {

/**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

       getFotos() : Observable<Foto[]> {
        return this.http.get<Foto[]>(API_URL + fotos);
    }
    getFotosDePersona(personaId:number):Observable<Foto[]>{
      return this.http.get<Foto[]>(`${API_URL}${personas}/${personaId}${fotos}`);
    
    }
      /**
    * Creates an foto
    * @param foto The foto which will be created
    * @returns The confirmation of the foto's creation
    */
   createFoto(foto:Foto): Observable<Foto> {
    return this.http.post<Foto>(API_URL + fotos, foto);
}
 /**
    * Returns the Observable object containing the foto retrieved from the API
    * @returns The foto
    */
   getFoto(fotoId:number): Observable<Foto> {
    return this.http.get<Foto>(API_URL + fotos + '/' + fotoId);
}
  /**
    * Updates an foto
    * @param foto The foto which will be update
    * @returns The confirmation of the foto's update
    */
   updateFoto(foto: Foto): Observable<Foto> {
    return this.http.put<Foto>(API_URL + fotos + '/' + foto.id, foto);
}
}


