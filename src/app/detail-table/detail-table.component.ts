import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent {
  @Input()
  data:any;
  
  getKeys(obj:any){
    return Object.keys(obj);
  }
}
