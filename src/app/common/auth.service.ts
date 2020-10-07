import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Role } from '../model/role';

@Injectable()
export class AuthService {
    public user: User;

    isAuthorized() {
        return !!this.user;
    }

    hasRole(role: Role) {
        return this.isAuthorized() && this.user.Role === role;
    }

    login(role: Role) {
      this.user = { Role: role };
     // console.log(this.user);
    }

    logout() {
      this.user = null;
    }
}
