import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  api: string = 'http://localhost:4000/api';
  options : any = {};
  constructor(
    private _http: HttpClient,
    private _toastr : ToastrService
  ) { }

  get<T>(api:string,callBack: (res:T)=>void){
    this._http.get<T>(`${this.api}/${api}`,{}).subscribe({
      next: (res)=>callBack(res),
      error: (err:HttpErrorResponse)=> {
        console.log(err);
        this._toastr.error(err.error.message);
      }
    });

  }

  post<T>(api:string,model:any,callBack: (res:any)=>void){
    this._http.post<T>(`${this.api}/${api}`,model,{}).subscribe({
      next: (res)=>callBack(res),
      error: (err:HttpErrorResponse)=> {
        console.log(err);
        this._toastr.error(err.error.message);
      }
    });
 
  }
}
