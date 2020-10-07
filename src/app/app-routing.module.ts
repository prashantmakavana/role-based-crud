import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormPageComponent } from './reactive-form-page/reactive-form-page.component';
import { PrimeComponent } from './prime/prime.component';
import { GridComponent } from './grid/grid.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './app-routing.guard';
import { AuthService } from './common/auth.service';
import { Role } from './model/role';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./front-page/front-page.module').then(m => m.FrontPageModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'form',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
   {
    path: 'reactiveFormPage',
    canActivate: [AuthGuard],
    loadChildren: () => import('./reactive-form-page/reactive-form-page.module').then(m => m.ReactiveFormPageModule)
  },
  {
    path: 'primeNg',
    canActivate: [AuthGuard],
    component: PrimeComponent,
  },
  {
    path: 'ngrx-user-list',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: {
      roles: [
        Role.Admin,
      ]
    },
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'grid',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: {
      roles: [
        Role.Admin,
      ]
    },
    component: GridComponent,
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }
