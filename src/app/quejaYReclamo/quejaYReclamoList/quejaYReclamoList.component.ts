import { Component, OnInit, Input } from '@angular/core'
import{QuejaYReclamo} from '../quejaYReclamo'
import{QuejaYReclamoService} from '../quejaYReclamo.service'

@Component({
  selector: 'app-queja-list',
  templateUrl: './quejaYReclamoList.html',
  styleUrls: ['./quejaYReclamoList.css']
})
export class QuejaYReclamoListComponent implements OnInit{ 
  
  constructor(private quejaService:QuejaYReclamoService) { }

  quejas: QuejaYReclamo[];

  @Input() idQueja:number;

  getQuejas():void{
    this.quejaService.getQuejasYReclamos().subscribe(clienteAux=> this.quejas=clienteAux)
  }
  ngOnInit() {
    this.getQuejas();
  }

}
