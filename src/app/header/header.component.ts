import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  a="beforefunctioncall";

  myFunction(){
    this.a="fromfunction"
    swal({
      title:"sharth"
    })
  }

}
