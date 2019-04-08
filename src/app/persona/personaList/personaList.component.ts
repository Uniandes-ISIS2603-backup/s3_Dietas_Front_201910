import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';



@Component({
    selector: 'app-persona-list',
    templateUrl: './personaList.component.html',
    styleUrls: ['./personaList.component.css']
})
export class PersonaListComponent implements OnInit {

    /**
    * The list of personas to display
    */
  //  @Input() personas: Persona[];

    /**
    * The component's constructor
    */
    //constructor(private personaService: PersonaService, private route: ActivatedRoute) {}

    allbooks: string = 'no';
    /**
    * This method retrieves all the personas in the database to show them in the list
    */
    getPersonas(): void {
     //   this.personaService.getPersonas()
     //       .subscribe(personas => {
      //          this.personas = personas;
     //       });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allbooks)
            .subscribe(params => {
                console.log(params);

                this.allbooks = params.allbooks;
                console.log(this.allbooks);
            });
        if (this.allbooks == 'yes') {
            console.log("allbooks");

            this.getBooks();
        }
    }

}