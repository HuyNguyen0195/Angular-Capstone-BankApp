import { Component, Input, OnInit } from '@angular/core';
import { GetService } from '../get.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent  {
  @Input()
  datas=[];
  
  getKeys(obj:any){
    return Object.keys(obj);
  }
}
