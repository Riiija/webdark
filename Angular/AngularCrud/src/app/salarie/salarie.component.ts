import { Component, OnInit } from '@angular/core';
import { Salarie } from './salarie';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.css']
})
export class SalarieComponent implements OnInit {
  salarieList: Salarie[];

  constructor(private service: ApiserviceService){}
  ngOnInit(): void {
      this.service.getSalarie().subscribe((salarie: Salarie[])=> this.salarieList=salarie);
  }
}
