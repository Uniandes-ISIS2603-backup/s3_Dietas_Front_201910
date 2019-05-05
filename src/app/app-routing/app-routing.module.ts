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

import { PersonaListComponent } from '../persona/persona-list/persona-list.component';
import { DietaListComponent } from '../dieta/dieta-list/dieta-list.component';
import { PagoListComponent } from '../pago/pago-list/pago-list.component';

import {DiaListarComponent} from '../dia/dia-listar/dia-listar.component';

import { SuspensionListComponent } from '../suspension/suspensionlist/suspensionlist.component';
import { CocinaListComponent } from '../cocina/cocinalist/cocinalist.component';
import { CalificacionycomentarioListComponent } from '../calificacionycomentario/calificacionycomentario-list/calificacionycomentario-list.component';
import{TipoDietaListarComponent} from '../tipo-dieta/tipo-dieta-listar/tipo-dieta-listar.component';



import { AppComponent } from '../app.component';
import { QuejayreclamoListComponent } from '../quejayreclamo/quejayreclamo-list/quejayreclamo-list.component';
import { HalloffameCreateComponent } from '../halloffame/halloffame-create/halloffame-create.component';
import { HalloffameEditarComponent } from '../halloffame/halloffame-editar/halloffame-editar.component';

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
        redirectTo: 'home', app-halloffame-editar
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
        },
        {
          path: 'add',
          component: HalloffameCreateComponent,
          data: {
            permissions: {
                only: ['ADMIN']
            }
        }
        },{
          path: 'edit',
          component: HalloffameEditarComponent,
          canActivate: [NgxPermissionsGuard],
          data: {
              permissions: {
                  only: ['ADMIN']
              }
          }
        }]
    
      },
      {
        path: 'personas',
        children: [{
          path: 'list',
          component: PersonaListComponent,
        
        } ,
          
        ]
    
      },
      {
        path: 'quejasYReclamos',
        children: [{
          path: 'list',
          component: QuejayreclamoListComponent,
        
        } ,
          
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
        path: 'calificacionesycomentarios',
        children: [{
          path: 'list',
          component: CalificacionycomentarioListComponent
         
        }   
        ]
    
      },
      {
        path: 'dietas',
        children: [{
          path: 'list',
          component: DietaListComponent
         
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
      {
        path: 'pagos',
        children: [{
          path: 'list',
          component: PagoListComponent
         
        }   
        ]
    
      },
      {
        path: 'dias',
        children: [{
          path: 'list',
          component: DiaListarComponent
         
        }   
        ]
    
      },
      {
        path: 'semanas',
        children: [{
          path: 'list',
          component: SemanaListarComponent
         
        }   
        ]
    
      },
      {
        path: 'tipoDietas',
        children: [{
          path: 'listar',
          component: TipoDietaListarComponent
         
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