import { Component, Input } from '@angular/core';
import { GetService } from '../get.service';

@Component({
  selector: 'app-table-pending',
  templateUrl: './table-pending.component.html',
  styleUrls: ['./table-pending.component.css']
})
export class TablePendingComponent {
  @Input()
  datas:any;
  @Input()
  url!:string;
  constructor(private service:GetService){}
  getKeys(obj:any){
    return Object.keys(obj);
  }
  remove(id:any){
    this.service.delete(this.url+'/deletebyid/'+id)
    .subscribe(res=>console.log(res))
  }
  approve(id:any){
    this.service.put(this.url,this.datas)
  }
}
