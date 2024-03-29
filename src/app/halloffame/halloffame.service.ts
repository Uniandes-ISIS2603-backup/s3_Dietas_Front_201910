import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Halloffame } from './Halloffame';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';


import { HalloffameDetail } from './halloffame-detail';

const API_URL = environment.apiURL;

const halls = '/halls';

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

     /**
    * Returns the Observable object containing the halloffame retrieved from the API
    * @returns The halloffame
    */
    getHalloffameDetail(halloffameId:number): Observable<HalloffameDetail> {
    
        return this.http.get<HalloffameDetail>(API_URL + halls +'/'+ halloffameId );
    }

      /**
    * Creates an halloffame
    * @param halloffame The halloffame which will be created
    * @returns The confirmation of the halloffame's creation
    */
   createHalloffame(halloffame:Halloffame): Observable<Halloffame> {
    return this.http.post<Halloffame>(API_URL + halls, halloffame);
}
/**
    * Returns the Observable object containing the halloffame retrieved from the API
    *  @param halloffameId The halloffame´s id which will be consulted
    * @returns The halloffame
    */
   getHalloffame(halloffameId:number): Observable<Halloffame> {
    return this.http.get<Halloffame>(API_URL + halls + '/' + halloffameId);
}

  /**
    * Updates an halloffame
    * @param halloffame The halloffame which will be update
    * @returns The confirmation of the hall's update
    */
   updateHalloffame(halloffame: Halloffame): Observable<Halloffame> {
    return this.http.put<Halloffame>(API_URL + halls + '/' + halloffame.id, halloffame);
}
}