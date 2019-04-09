import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Foto } from './foto';

import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const fotos = 'fotos.json';

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
}


