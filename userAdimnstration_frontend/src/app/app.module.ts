import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';
import {SplitButtonModule} from 'primeng/splitbutton';
import {CommonModule} from '@angular/common';
// @ts-ignore
import {MultiSelectModule} from 'primeng/multiselect';
import {ToastrModule} from 'ngx-toastr';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {HomePageComponent} from './components/home-page/home-page.component';
import {DepartmentSettingsComponent} from './components/department-settings/department-settings.component';
import {EmployeeSettingsComponent} from './components/employee-settings/employee-settings.component';
import {ErrorhandlerService} from './helper/errorhandler.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DepartmentSettingsComponent,
    EmployeeSettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule,
    DropdownModule,
    TableModule,
    FieldsetModule,
    InputTextModule,
    PaginatorModule,
    DialogModule,
    SplitButtonModule,
    CommonModule,
    DynamicDialogModule,
    MultiSelectModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorhandlerService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
