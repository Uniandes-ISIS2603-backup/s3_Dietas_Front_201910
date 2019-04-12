import { Component, OnInit, Input } from '@angular/core';
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

  personas: Persona[];

  @Input() idHall:number;

  getPersonasDeHall(hallId):void{
    this.personaService.getPersonasDeHall(hallId).subscribe(clienteAux=> this.personas=clienteAux)
  }

  getPersonas():void{
    this.personaService.getPersonas().subscribe(clienteAux=> this.personas=clienteAux)
  }
  ngOnInit() {
    this.getPersonas();
  }

}