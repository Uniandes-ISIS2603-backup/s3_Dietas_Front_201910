import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Persona} from './persona';
import{PersonaDetail} from'./persona-detail';
import{Observable} from'rxjs';

const API_URL="../../assets/";
const clientes='personas.json'
@Injectable()
export class PersonaService {

  constructor(private http: HttpClient) { }
  
  getPersonasDetail():Observable<PersonaDetail[]>{
    return this.http.get<PersonaDetail[]>(API_URL+clientes);
  }
  getPersonaDetail(personaId:number): Observable<PersonaDetail> {
        return this.http.get<PersonaDetail>(API_URL + "persona" + personaId+".json");
    }
}