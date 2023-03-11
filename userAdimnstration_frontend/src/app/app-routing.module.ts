import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {EmployeeSettingsComponent} from './components/employee-settings/employee-settings.component';
import {DepartmentSettingsComponent} from './components/department-settings/department-settings.component';


const routes: Routes = [
  {path: '', redirectTo: 'homePage', pathMatch: 'prefix'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'employee-settings', component: EmployeeSettingsComponent},
  {path: 'department-settings', component: DepartmentSettingsComponent},
  {path: '**', redirectTo: 'homePage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
