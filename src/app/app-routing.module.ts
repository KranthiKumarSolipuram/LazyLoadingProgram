import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path: 'employee' , loadChildren: () => import("./employee/employee.module").then(x => x.EmployeeModule)},
  {path: 'customer' , loadChildren: () => import("./customer/customer.module").then(x => x.CustomerModule)},
  {path: 'student', loadChildren: () => import("./student/student.module").then(x => x.StudentModule)},
  {path: 'nested', loadChildren: () => import("./nested/nested.module").then(x => x.NestedModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
