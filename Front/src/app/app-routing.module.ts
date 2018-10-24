import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './crud/customer/list/list.component';
import { ViewComponent } from './crud/customer/view/view.component';
import { UpdateComponent } from './crud/customer/update/update.component';
import { CreateComponent } from './crud/customer/create/create.component';
import { EmployeeListComponent } from './crud/employee/employee-list/employee-list.component';
import { EmployeeViewComponent } from './crud/employee/employee-view/employee-view.component';
import { EmployeeUpdateComponent } from './crud/employee/employee-update/employee-update.component';
import { EmployeeCreateComponent } from './crud/employee/employee-create/employee-create.component';
import { ProjectListComponent } from './crud/project/project-list/project-list.component';
import { ProjectViewComponent } from './crud/project/project-view/project-view.component';
import { ProjectUpdateComponent } from './crud/project/project-update/project-update.component';
import { ProjectCreateComponent } from './crud/project/project-create/project-create.component';

const routes: Routes = [

    {
        path: 'customer',
        component: ListComponent,
    },
    {
        path: 'customer/view/:id',
        component: ViewComponent,
    },
    {
        path: 'customer/update/:id',
        component: UpdateComponent,
    },
    {
        path: 'customer/create',
        component: CreateComponent,
    },
    {
        path: 'employee',
        component: EmployeeListComponent,
    },
    {
        path: 'employee/view/:id',
        component: EmployeeViewComponent,
    },
    {
        path: 'employee/update/:id',
        component: EmployeeUpdateComponent,
    },
    {
        path: 'employee/create',
        component: EmployeeCreateComponent,
    },
    {
        path: 'project',
        component: ProjectListComponent,
    },
    {
        path: 'project/view/:id',
        component: ProjectViewComponent,
    },
    {
        path: 'project/update/:id',
        component: ProjectUpdateComponent,
    },
    {
        path: 'project/create',
        component: ProjectCreateComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
