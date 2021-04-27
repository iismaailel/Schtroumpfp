import { Component, OnInit } from '@angular/core';
import { Schtroumpf } from '../../schtroumpf';
import { ServiceService }  from '../../service.service';
import { Router } from '@angular/router';
import { SchtroumpfID } from '../../schtroumpfID';


@Component({
  selector: 'app-list-schtroumpf',
  templateUrl: './list-schtroumpf.component.html',
  styleUrls: ['./list-schtroumpf.component.scss']
})
export class ListSchtroumpfComponent implements OnInit {
  alerte  : boolean = false;
  schtroumpfs: any;
  sID = new SchtroumpfID("");

  constructor(private _service:ServiceService,  private _route: Router) { }

  ngOnInit(): void {
    let response = this._service.getschtroumpf();
    response.subscribe((data) => {
      console.log(data)
      this.schtroumpfs = data.response
    });
  }

  deleteSchtroumpf(id: string){
      this.sID.schtroumpfID = id
      console.log(this.sID)
      let response =   this._service.deleteschtroumpf(this.sID);
      response.subscribe((data)=>{
        console.log(this.sID)
        this.alerte = true;

      });
  }


  gotoaddSchtroumpf(){
    this._route.navigate(['/addstr']);
  }

}
