
import { Component, OnInit, Input } from '@angular/core';
import {Pago} from "../pago";
import {PagoService} from "../pago.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-list',
  templateUrl: './pago-list.component.html',
  styleUrls: ['./pago-list.component.css']
})
export class PagoListComponent implements OnInit {

 /**
  * The list of pagos to display
  */
@Input() pagos: Pago[];

/**
     * Constructor for the component
     * @param pagoService The pago's services provider
     */
constructor(private pagoService:PagoService, private router: Router) { }

/**
* This method retrieves all the pagos to show them in the list
 */
getPagos(): void{
this.pagoService.getPagos().subscribe(c => this.pagos = c);
}


/**
 * The method which initializes the component
 */
  ngOnInit() {
    this.getPagos();
  }


}