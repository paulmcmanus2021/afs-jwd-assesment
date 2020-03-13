import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { NgZorroAntdModule, en_US } from 'ng-zorro-antd';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [ClientsComponent, ContractorsComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NzLayoutModule
  ]
})
export class HomeModule { }
