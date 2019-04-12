import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Persona} from './persona';
import{PersonaDetail} from'./persona-detail';
import{Observable} from'rxjs';

import { environment } from '../../environments/environment';


const API_URL = environment.apiURL;

const halls = '/halls';
const personas = '/personas';


@Injectable()
export class PersonaService {

  constructor(private http: HttpClient) { }
  
  getPersonasDeHall(hallId:number):Observable<Persona[]>{
    return this.http.get<Persona[]>(API_URL+halls+"/"+hallId+"/"+personas);
  }

  getPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(API_URL+personas);
  }
  getPersonaDetail(personaId:number): Observable<PersonaDetail> {
        return this.http.get<PersonaDetail>(API_URL + personas+'/' + personaId+"/fotos");
    }

     /**
    * Creates an Persona
    * @param persona The persona which will be created
    * @returns The confirmation of the persona's creation
    */
   createHalloffame(persona:Persona): Observable<Persona> {
    return this.http.post<Persona>(API_URL + personas, persona);
   }
}