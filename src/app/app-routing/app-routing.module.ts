import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {SemanaListarComponent} from '../semana/semana-listar/semana-listar.component';

import { HalloffamelistarComponent } from '../halloffame/halloffamelistar/halloffamelistar.component';
import { FotolistarComponent } from '../foto/fotolistar/fotolistar.component';
import { HalloffameDetailComponent } from '../halloffame/halloffame-detail/halloffame-detail.component';
import { ComidalistarComponent } from '../comida/comidalistar/comidalistar.component';
import { SuspensionListComponent } from '../suspension/suspensionlist/suspensionlist.component';
import { CocinaListComponent } from '../cocina/cocinalist/cocinalist.component';
import { CalificacionycomentarioListComponent } from '../calificacionycomentario/calificacionycomentariolist/calificacionycomentariolist.component';

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
        redirectTo: 'home'
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
        path: 'comidas',
        children: [{
          path: 'list',
          component: ComidalistarComponent
         
        }   
        ]
    
      },
      {
        path: 'suspensiones',
        children: [{
          path: 'list',
          component: SuspensionListComponent
         
        }   
        ]
    
      },
      {
        path: 'cocinas',
        children: [{
          path: 'list',
          component: CocinaListComponent
         
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
    
      }
      
   
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
