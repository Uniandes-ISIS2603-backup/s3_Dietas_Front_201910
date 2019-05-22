import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Dieta} from './dieta';
import {DietaDetail} from './dieta-detail';
import {Suspension} from '../suspension/suspension';
import {Semana} from '../semana/semana';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const dietas = '/dietas';
const suspensiones = '/suspensiones';
const semanas = '/semanas';
const personas='/personas';


/**
* The service provider for everything related to dietas
*/
@Injectable()
export class DietaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of dietas retrieved from the API
    * @returns The list of dietas in real time
    */
    getDietas(): Observable<Dieta[]> {
        return this.http.get<Dieta[]>(API_URL + dietas);
    }
    

     /**
    * Returns the Observable object containing the dieta retrieved from the API
    * @returns The dieta
    */
   getDietaDetail(dietaId): Observable<DietaDetail> {
    console.log(dietaId+" "+API_URL + "dieta-" + dietaId+".json");
      return this.http.get<DietaDetail>(API_URL + dietas +'/'+ dietaId + "/personas" );
  }
  getDietasDePersonas(personaId:number):Observable<Dieta[]>{
    return this.http.get<Dieta[]>(`${API_URL}${personas}/${personaId}${dietas}`);
  
  }
    /**
    * Creates a new dieta
    * @param dieta The new dieta
    * @returns The book with its new id if it was created, false if it wasn't
    */
    createDieta(dieta): Observable<DietaDetail> {
        return this.http.post<DietaDetail>(API_URL + dietas, dieta);
    }

    

    /**
    * Returns the Observable object containing the halloffame retrieved from the API
    * @returns The halloffame
    */
   getDieta(dietaId:number): Observable<Dieta> {
    return this.http.get<Dieta>(API_URL + dietas + '/' + dietaId);
}

    /**
    * Creates a suspension
    * @param suspension The suspension
    * @returns True if the suspension was posted, false otherwise
    */
    createSuspension(dietaId, suspension): Observable<Suspension> {
        return this.http.post<Suspension>(API_URL + dietas + '/' + dietaId + suspensiones, suspension);
    }


    /**
    * Creates a semana
    * @param semana The semana
    * @returns True if the semana was posted, false otherwise
    */
   createSemana(dietaId, semana): Observable<Semana> {
    return this.http.post<Semana>(API_URL + dietas + '/' + dietaId + semanas, semana);
}

    /**
        * Updates a new dieta
        * @param dieta The updated dieta
        * @returns The updated dieta
        */
    updateDieta(dieta): Observable<DietaDetail> {
        return this.http.put<DietaDetail>(API_URL + dietas + '/' + dieta.id, dieta);
    }
    
    /**
    * Deletes a dieta
    * @param dietaId The dieta's id
    * @returns True if the dieta was deleted, false otherwise
    */
    deleteDieta(dietaId): Observable<DietaDetail> {
        return this.http.delete<DietaDetail>(API_URL + dietas + '/' + dietaId);
    }
}


