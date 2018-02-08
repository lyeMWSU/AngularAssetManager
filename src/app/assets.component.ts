import {Component} from '@angular/core';
import {AssetsService} from './assets.service';

@Component({
  selector: 'assets',
  template: `
    <h2>{{title}}</h2>
    <table class="table table-bordered table-hover table-striped">
      <thead>
      <th>Name</th>
      <th>Serial Num</th>
      <th>Type</th>
      <th>Ram</th>
      <th>Warranty Exp</th>
      <th>Cost</th>
      </thead>
      <tbody>
      <tr *ngFor="let asset of assets">
        <td>{{ asset.name | uppercase }}</td>
        <td>{{ asset.serialNum | uppercase }}</td>
        <td>{{ asset.type }}</td>
        <td>{{ asset.ram }}</td>
        <td>{{ asset.warrantyExp | date:'shortDate' }}</td>
        <td>{{ asset.cost | currency:'USD'}}</td>
      </tr>
      </tbody>
    </table>
  `
})
export class AssetsComponent {
  title = 'List of assets';
  private asset: { name: string; serialNum: string; type: string; ram: string; cost: number; warrantyExp: Date };
  assets = [
    this.asset = {
      name: 'BC001',
      serialNum: 'PC123456',
      type: 'PC',
      ram: '16gb',
      cost: 2100.32,
      warrantyExp: new Date(2020, 1, 1)
    },
    this.asset = {
      name: 'BC002',
      serialNum: 'PC123321',
      type: 'Laptop',
      ram: '16gb',
      cost: 1900.56,
      warrantyExp: new Date(2020, 1, 1)
    },
    this.asset = {
      name: 'BC003',
      serialNum: 'PC123465',
      type: 'Laptop',
      ram: '8gb',
      cost: 1450.99,
      warrantyExp: new Date(2020, 5, 1)
    },
    this.asset = {
      name: 'BC004',
      serialNum: 'PC921564',
      type: 'Tablet',
      ram: 'N/A',
      cost: 950.76,
      warrantyExp: new Date(2019, 11, 15)
    },
  ];

  constructor(service: AssetsService) {
  }

  //logic for calling an HTTP service

}
