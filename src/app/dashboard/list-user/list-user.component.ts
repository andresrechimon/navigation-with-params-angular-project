import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUser:any[] = [];
  loading:boolean = true;

  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.us.getUsers().subscribe(data => {
      setInterval(() => {
        this.listUser = data.data
        this.loading = false;
      }, 1000)
    })
  }
}
