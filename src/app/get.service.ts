import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth-service.service';
import { authUrl } from './baseUrl';


@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(
    private http:HttpClient,
    private auth:AuthService
    ) { }

  get(url:string){
    return this.http.get(url,{headers:this.auth.getHeader()})
  }

  post(url:string,data:any){
    return this.http.post(url,data,{headers:this.auth.getHeader()})
  }
  postSignUp(url:string,data:any){
    return this.http.post(url,data,{responseType:'text'})
  }
  put(url:string,data:any){
    return this.http.put(url,data,{headers:this.auth.getHeader()})
  }
  putText(url:string,data:any){
    return this.http.put(url,data,{headers:this.auth.getHeader(),responseType:'text'})
  }
  delete(url:string){
    return this.http.delete(url,{headers:this.auth.getHeader(),responseType:'text'})
  }
  generateToken(data:any){
    return this.http.post<string>(authUrl,data,{responseType:'text' as 'json'})
  }
  
 
}
