import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';
import { Persona } from '../../persona/persona';
import { PersonaService } from '../../persona/persona.service';


@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private personaService : PersonaService
    ) { }

    user: User;
    name: number;
    password: String;
    rol: String;
    lleno: boolean;
    persona: Persona;

    roles: String[];

    private focusoutHandler(refVar, tipo: any) {
        if (tipo == "name") {
          this.name = refVar.value;
        }
        else if (tipo == "password") {
          this.password = refVar.value;
        }
        else if (tipo == "rol") {
          this.rol = refVar.value;
        }
      }

      private sacarJSON() {
        this.lleno=true;
        if(this.name ==null){
          console.log("Porfavor ingresar un nombre");
          this.lleno=false;
        }
        if(this.password ==null){
          console.log("Porfavor ingresar una contraseña");
          this.lleno=false;
        }
        if(this.rol ==null){
          console.log("Porfavor ingresar un rol");
          this.lleno=false;
        }
        
        if(this.lleno==true){
            this.personaService.getPersona(name).subscribe(clienteAux=> this.persona=clienteAux);
        }
      } 

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.authService.login(this.user.role);
        this.toastrService.success('Logged in')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrator', 'Client'];
    }

}
