import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './modules/componentes/log-in/log-in.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { NotFoundComponent } from './modules/componentes/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  { 
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => 
      import('./modules/gestion/gestion.module').then(
        (m) => m.GestionModule
      )
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
