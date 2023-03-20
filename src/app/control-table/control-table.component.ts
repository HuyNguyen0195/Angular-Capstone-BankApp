import { Component, Input } from '@angular/core';
import { GetService } from '../get.service';

@Component({
  selector: 'app-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.css']
})
export class ControlTableComponent {
  @Input()
  datas:any;
  @Input()
  url!:string;
  constructor(private service:GetService){}
  getKeys(obj:any){
    return Object.keys(obj);
  }
  delete(id:any){
    this.service.delete(this.url+'/deletebyid/'+id)
    .subscribe(res=>console.log(res))
  }
}
