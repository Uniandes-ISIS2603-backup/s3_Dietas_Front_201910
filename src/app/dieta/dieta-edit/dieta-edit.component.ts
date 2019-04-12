import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {DietaService} from '../dieta.service';
import { ToastrService } from 'ngx-toastr';
import { Dieta } from '../dieta';
import {DietaDetail} from '../dieta-detail';

@Component({
    selector: 'app-dieta-edit',
    templateUrl: './dieta-edit.component.html',
    styleUrls: ['./dieta-edit.component.css']
})
export class DietaEditComponent implements OnInit, OnChanges {

    
     /**
        * Constructor for the component
        * @param dp DatePipe to format the date.
        * @param dietaService The halls' services provider
        * @param toastrService The toastr to show messages to the user
        */
       constructor(
     
        private dietaService: DietaService,
        private toastrService: ToastrService,
    ) {}
    
    /**
    * The halloffame id as received from the parent component
    */
    @Input() dieta_id: number;
    
    /**
    * The output which tells the parent component
    * that the user no longer wants to create an halloffame
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * The output which tells the parent component
    * that the user updated a new halloffame
    */
    @Output() update = new EventEmitter();
    
    
    /**
        * The halloffame to edit
        */
      dieta: Dieta;
    
    /**
        * Retrieves the information of the dieta
        */
       getDieta(): void {
        this.dietaService.getDieta(this.dieta_id)
            .subscribe(fo => {
                this.dieta = fo;
            });
    }
    
      /**
        * Updates the information of the dieta
        */
       editDieta(): void {
        
        this.dietaService.updateDieta(this.dieta)
                .subscribe(() => {
                    this.update.emit();
                    this.toastrService.success("The dieta's information was updated", "dieta edition");
                });
    }
    
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }
    
    
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.dieta = new Dieta();
    }
    
    /**
    * This function will be called when the user chooses another halloffame to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }
    
    }
    



