import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { ContractorsComponent } from './contractors/contractors.component';

@NgModule({
  declarations: [ClientsComponent, ContractorsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
