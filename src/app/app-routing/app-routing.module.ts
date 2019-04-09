import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

import { HalloffamelistarComponent } from '../halloffame/halloffamelistar/halloffamelistar.component';
import { FotolistarComponent } from '../foto/fotolistar/fotolistar.component';
import { HalloffameDetailComponent } from '../halloffame/halloffame-detail/halloffame-detail.component';
import { ComidalistarComponent } from '../comida/comidalistar/comidalistar.component';

import { AppComponent } from '../app.component';

const routes: Routes = [

    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: AppComponent
    }
    /**,
    {
        path: '**',
        redirectTo: 'home',
    } */,
    {
        path: 'halls',
        children: [{
          path: 'list',
          component: HalloffamelistarComponent
        
        } ,
          {
          path: ':id',
          component: HalloffameDetailComponent,
          outlet: 'detail'
        }   
        ]
    
      },
      {
        path: 'fotos',
        children: [{
          path: 'list',
          component: FotolistarComponent
         
        }   
        ]
    
      },
      /**{
        path: 'comidas',
        children: [{
          path: 'list',
          component: ComidalistarComponent
      
        }   
        ]
    
      } */
   
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
