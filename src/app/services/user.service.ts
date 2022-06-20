import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = 'https://gorest.co.in/public-api/users';
  token:string = '3f70d9ca141059036e27ddcc676c14f0167bf85533a254a4a47bd0dd7740490c';

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

  getUser(id:number):Observable<any>{
    return this.http.get<any>(this.url + '/' + id + '?access-token=' + this.token);
  }
}
