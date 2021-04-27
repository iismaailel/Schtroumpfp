import { Injectable } from '@angular/core';
import { Schtroumpf } from './schtroumpf';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchtroumpfID } from './schtroumpfID';





@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  addschtroumpf(schtroumpf: Schtroumpf){
    return this._http.post<any>('http://localhost:3000/api/schtroumpf/store',schtroumpf, {responseType:"text" as "json"});
  }
  getschtroumpf(): Observable<any>{
    return this._http.get<any>('http://localhost:3000/api/schtroumpf');
  }

  deleteschtroumpf(schtroumpfID: SchtroumpfID){
    return this._http.post('http://localhost:3000/api/schtroumpf/delete',schtroumpfID);
  }

}
