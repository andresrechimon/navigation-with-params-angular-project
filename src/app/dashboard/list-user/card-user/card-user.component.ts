import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  @Input() user:any;

  imgUrl:string = 'https://cdn1.iconfinder.com/data/icons/user-interface-664/24/User-512.png';
  id!:number;
  firstName:string = '';
  email:string = '';

  constructor() { }

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }

}
