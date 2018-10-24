import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Module
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


// Component
import { AppComponent } from './app.component';
import { ListComponent } from './crud/customer/list/list.component';
import { CreateComponent } from './crud/customer/create/create.component';
import { UpdateComponent } from './crud/customer/update/update.component';
import { ViewComponent } from './crud/customer/view/view.component';
import { EmployeeListComponent } from './crud/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './crud/employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './crud/employee/employee-update/employee-update.component';
import { EmployeeViewComponent } from './crud/employee/employee-view/employee-view.component';
import { ProjectListComponent } from './crud/project/project-list/project-list.component';
import { ProjectCreateComponent } from './crud/project/project-create/project-create.component';
import { ProjectViewComponent } from './crud/project/project-view/project-view.component';
import { ProjectUpdateComponent } from './crud/project/project-update/project-update.component';

// services
import {CustomerService} from './services/customer.service';
import {EmployeeService} from './services/employee.service';
import { ProjectService } from './services/project.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    ViewComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeViewComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectViewComponent,
    ProjectUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    EmployeeService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
