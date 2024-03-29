import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comida } from './comida';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const comidas = '/comidas';
const dias ='/dias';

@Injectable()
export class ComidaService {

    /**
        * Constructor of the service
        * @param http The HttpClient - This is necessary in order to perform requests
        */
    constructor(private http: HttpClient) { }


    getComidas(): Observable<Comida[]> {
        return this.http.get<Comida[]>(API_URL + comidas);
    }

    /**
    * Creates an comida
    * @param comida The comida which will be created
    * @returns The confirmation of the comida's creation
    */
    createComida(comida: Comida): Observable<Comida> {
        return this.http.post<Comida>(API_URL + comidas, comida);
    }
    /**
        * Returns the Observable object containing the comida retrieved from the API
        * @returns The Comida
        */
    getComida(comidaId: number): Observable<Comida> {
        return this.http.get<Comida>(API_URL + comidas + '/' + comidaId);
    }
    /**
      * Updates an comida
      * @param comida The comida which will be update
      * @returns The confirmation of the comida's update
      */
    updateComida(comida: Comida): Observable<Comida> {
        return this.http.put<Comida>(API_URL + comidas + '/' + comida.id, comida);
    }
    getComidasDeDia(diaId:number):Observable<Comida[]>{
        return this.http.get<Comida[]>(`${API_URL}${dias}/${diaId}${comidas}` )
      }
}