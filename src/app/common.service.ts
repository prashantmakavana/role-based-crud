import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public _http:HttpClient) { }

  createUser(user)
  {
    return this._http.post('http://localhost:3000/users',user); 
  }

  getAllUser(){
    return this._http.get('http://localhost:3000/users');
  }

  updateUser(user){
    return this._http.put('http://localhost:3000/users/' + user.id, user);
  }

  deleteUser(deleteUserRecordId){
    //console.log(deleteUserRecordId);
    return this._http.delete('http://localhost:3000/users/' + deleteUserRecordId);
  } 


}
