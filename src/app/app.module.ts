import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
        
// Prime Ng Module
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {TreeTableModule} from 'primeng/treetable';
import {NodeService} from './prime/nodeservice';
import {DropdownModule} from 'primeng/dropdown';
import {PickListModule} from 'primeng/picklist';

import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';

import {ProductService} from './common/productservice';

import {FullCalendarModule} from 'primeng/fullcalendar';
import { CalenderService } from './common/calenderservice';

import { UploadService } from './common/uploadService';

import { AuthService } from './common/auth.service';

// Component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormPageComponent } from './reactive-form-page/reactive-form-page.component';
import { UserComponent } from './user/user.component';

// NGRX Module
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';
import { UserEffects } from './user.effects';
import { PrimeComponent } from './prime/prime.component';

import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './grid/grid.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ReactiveFormPageComponent,
    PageNotFoundComponent,
    FrontPageComponent,
    UserComponent,
    PrimeComponent,
    GridComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AgGridModule.withComponents([]),
    // Prime NG Module
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TabViewModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    TreeTableModule,
    DropdownModule,
    MultiSelectModule,
    PickListModule,
    ToastModule,
    ConfirmDialogModule,
    FullCalendarModule,
    FileUploadModule,
        
    // NGRX
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [NodeService, ProductService, CalenderService, MessageService, ConfirmationService, UploadService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
