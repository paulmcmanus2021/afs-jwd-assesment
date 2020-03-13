import { Component, OnInit } from '@angular/core';
import mock_data from '../../../../src/assets/mock_data.json';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  listData = mock_data;
  nzData = this.listData;

  constructor() { }

  ngOnInit() {
    
    
  }

}
