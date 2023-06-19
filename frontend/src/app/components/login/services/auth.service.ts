import { Injectable } from '@angular/core';
import { GenericHttpService } from 'src/app/common/services/generic-http.service';
import { LoginResponseModel } from '../model/login-response.model';
import { LoginModel } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: GenericHttpService,
  ) { }

  login(model:LoginModel,callBack: (res:LoginResponseModel)=>void){
    this._http.post<LoginResponseModel>("auth/login",model,res=> callBack(res));
  }
}
