import { Component, OnInit } from '@angular/core';
import{Persona} from '../persona'
import{PersonaDetail} from '../persona-detail'
import{PersonaService} from '../persona.service'

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit{ 
  
  constructor(private personaService:PersonaService) { }

  personas: PersonaDetail[];

  getPersonasDetail():void{
    this.personaService.getPersonasDetail().subscribe(clienteAux=> this.personas=clienteAux)
  }
  ngOnInit() {
    this.getPersonasDetail();
  }

}