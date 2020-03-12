import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './home/clients/clients.component';
import { ContractorsComponent } from './home/contractors/contractors.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'home/clients', component: ClientsComponent},
  { path: 'home/contractors', component: ContractorsComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
