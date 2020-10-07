import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from './user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'assets/users.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {

    return this.http.get<IUser[]>(this.userUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),  
      );
      
  }

}
