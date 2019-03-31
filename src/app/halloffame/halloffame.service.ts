import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Halloffame } from './Halloffame';

import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const halls = 'halls.json';

@Injectable()
export class HalloffameService {

/**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

       getHalls() : Observable<Halloffame[]> {
        return this.http.get<Halloffame[]>(API_URL + halls);
    }
}