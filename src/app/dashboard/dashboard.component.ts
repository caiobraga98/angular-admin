import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
binario1: any =0;
binario2 : any = 0;

converte1 = parseInt(this.binario1, 2);
converte2 = parseInt(this.binario2, 2);


}
