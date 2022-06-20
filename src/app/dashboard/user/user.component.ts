import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id!:number;
  name:string = '';
  email:string = '';
  urlImg:string = 'https://cdn1.iconfinder.com/data/icons/user-interface-664/24/User-512.png';
  gender:string = '';
  loading:boolean = true;

  constructor(private aRoute:ActivatedRoute,
              private us:UserService) { 
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.us.getUser(this.id).subscribe(data => {
      setInterval(() => {
        this.name = data.data.name,
        this.email = data.data.email,
        this.gender = data.data.gender
        this.loading = false;
      }, 1000)
    })
  }
}
