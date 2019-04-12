import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {DietaService} from '../dieta.service';
import {Dieta} from '../dieta';
import {DietaDetail} from '../dieta-detail';
//import {DietaReviewComponent} from '../dieta-reviews/dieta-review.component';
//import {DietaAddReviewComponent} from '../dieta-add-review/dieta-add-review.component';

@Component({
    selector: 'app-dieta-detail',
    templateUrl: './dieta-detail.component.html',
    styleUrls: ['./dieta-detail.component.css']
})
export class DietaDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param dietaService The dieta service which communicates with the API
    * @param route The route which helps to retrieves the id of the dieta to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dietaService: DietaService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {
        //This is added so we can refresh the view when one of the dieta in
        //the "Other dieta" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The dieta's id retrieved from the path
    */
   dieta_id: number;

    /**
    * The dieta whose details are shown
    */
   dietaDetail: DietaDetail;

    /**
    * The other dietas shown in the sidebar
    */
    other_dietas: Dieta[];

    /**
    * The suscription which helps to know when a new dieta
    * needs to be loaded
    */
    navigationSubscription;

    /**
    * The method which retrieves the details of the dieta that
    * we want to show
    */
    getDietaDetail(): void {
        this.dietaService.getDietaDetail(this.dieta_id)
            .subscribe(dietaDetail => {
                this.dietaDetail = dietaDetail;
            });
    }

    /**
    * This method retrieves all the dietas in the Persona to show them in the list
    */
    getPastDietas(): void {
        this.dietaService.getDietas()
            .subscribe(dietas => {
                this.other_dietas = dietas;
                this.other_dietas = this.other_dietas.filter(dieta => dieta.id !== this.dieta_id);
            });
    }


    /**
    * This function deletes the dieta from the app 
    */
    deleteDieta(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a dieta',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this doeta?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.dietaService.deleteDieta(this.dieta_id).subscribe(dieta => {
                            this.toastrService.success("The dieta  ", "Dieta deleted");
                            this.router.navigate(['dietas/list']);
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the dieta and its persona so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.dieta_id = +this.route.snapshot.paramMap.get('id');
        this.dietaDetail = new DietaDetail();
        this.getDietaDetail();
        this.getPastDietas();
    }

    /**
    * This method helps to refresh the view when we need to load another dieta into it
    * when one of the other dietas in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}