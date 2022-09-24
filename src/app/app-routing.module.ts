import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{path:"home", component:HomeCustomerComponent},
{path: "list", component:CustomerListComponent},
{path: "create", component: CreateCustomerComponent},
{path: '', redirectTo: '/home', pathMatch:'full'},
{path:'**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
