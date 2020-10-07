import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../user';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../user.actions';
import * as fromUser from '../user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() attribute: any;
  
  pageTitle = 'Users List';
  errorMessage = '';
  users: IUser[] = [];

  public class: string;

  constructor(private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(new UserActions.LoadUsers()); 

    this.store.pipe(select(fromUser.getUsers)).subscribe(
      users => {
        this.users = users;
      }
    )
    this.store.pipe(select(fromUser.getError)).subscribe(
      err => {
        this.errorMessage = err;
      }
    )

  }

}
