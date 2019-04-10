import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comida } from './comida';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const comidas = '/comidas';

@Injectable()
export class ComidaService {

/**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }


       getComidas() : Observable<Comida[]> {
        return this.http.get<Comida[]>(API_URL + comidas);
    }
}