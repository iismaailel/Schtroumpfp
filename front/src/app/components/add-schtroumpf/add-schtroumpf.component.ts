import { Component, OnInit } from '@angular/core';
import { Schtroumpf } from '../../schtroumpf';
import { ServiceService }  from '../../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-schtroumpf',
  templateUrl: './add-schtroumpf.component.html',
  styleUrls: ['./add-schtroumpf.component.scss']
})
export class AddSchtroumpfComponent implements OnInit {
  alerte  : boolean = false;
  schtroumpf =new Schtroumpf("","",0,"","");

  constructor(private _service:ServiceService,  private _route: Router) { }

  ngOnInit(): void {
  }

  public ajouterSchtroumpf(){
  let response = this._service.addschtroumpf(this.schtroumpf);
  response.subscribe((data)=>{
    this.alerte = true;
  });
  }

}
