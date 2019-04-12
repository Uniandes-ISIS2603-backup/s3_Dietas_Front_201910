import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {DietaService} from '../dieta.service';
//import {SemanaService} from '../../semana/semana.service';
import {SuspensionService} from '../../suspension/suspension.service';
import {Dieta} from '../dieta';
import {Persona} from '../../persona/persona';
import {Suspension} from '../../suspension/suspension';
import {Semana} from '../../semana/semana';

@Component({
    selector: 'app-dieta-create',
    templateUrl: './dieta-create.component.html',
    styleUrls: ['./dieta-create.component.css']
})
export class DietaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dietaService The dietas' services provider
    * @param semanaService The semanas' services provider
    * @param suspensionService The suspensiones' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private dietaService: DietaService,
//        private semanaService: SemanaService,
        private suspensionService: SuspensionService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new dieta
    */
    dieta: Dieta;

    /**
    * The list of the Persona in the app
    */
    personas: Persona[];

    /**
    * The list of all the suspensiones in the app
    */
    suspensiones: Suspension[];

    /**
    * The semanas of the new book
    * This list is passed as a parameter to the child two-list component
    * It is also updated by that child component
    */
    dietaSemanas: Semana[];

    /**
    * Retrieves the list of semanas in the App
    */
    getSemanas(): void {
//        this.semanaService.getSemanas()
//           .subscribe(semanas => {
//                this.semanas = semanas;
//           }, err => {
//               this.toastrService.error(err, 'Error');
//            });
    }

    /**
    * Retrieves the list of suspensiones in the App
    */
   getSuspensiones(): void {
    this.suspensionService.getSuspensiones()
        .subscribe(semanas => {
//            this.semanas = semanas;
        }, err => {
            this.toastrService.error(err, 'Error');
        });
}

    /**
    * Cancels the creation of the new dieta
    * Redirects to the dietas' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The dieta wasn\'t created', 'Dieta creation');
        this.router.navigate(['/books/list']);
    }

    /**
    * Creates a new dieta
    */
    createDieta(): Dieta {
        this.dietaService.createDieta(this.dieta)
            .subscribe(dieta => {
                this.dieta.id = dieta.id;
                this.router.navigate(['/dietas/' + dieta.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.dieta;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.dieta = new Dieta();
        this.dieta.persona = new Persona();
        this.getSemanas();
        this.getSuspensiones();
    }

}
