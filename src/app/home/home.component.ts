import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { CommonService } from '../common.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

import { Message } from 'primeng/api';
import { AuthService } from '../common/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public userRole: any;
  registerForm: FormGroup;
  submitted = false;
  msgs: Message[] = [];

  @Input() attribute: any;
  public icon: string;

  allUser: any;
  public cpyAllUser: any;

  public deleteUserRecord: any;
  private deletedUserObject:any;
  private dltUserRcrd: any;
  isEdit: any = false;

  public placeholder: string;
  public text: 'Crud';
  public value: boolean;

  userObj: any = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    id: '',
  };

  constructor(
    public commonService: CommonService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder,
    public authService: AuthService ) {}

  ngOnInit() {

      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        mobile: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.getLatestUser();

    this.userRole = this.authService.user.Role;
   // console.log(this.userRole);

  }

  get f() { return this.registerForm.controls; }

  resetForm() {
    this.registerForm.reset();
  }

  addUser() {
    if(this.dltUserRcrd){
      console.log(this.dltUserRcrd);
      this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.msgs = [
            { severity: 'info', summary: 'Confirmed', detail: 'Record deleted' },
          ];
          this.commonService.deleteUser(this.dltUserRcrd).subscribe(() => {
            this.getLatestUser();
            this.dltUserRcrd = null;
          });
        },
        reject: () => {
          this.msgs = [
            {
              severity: 'info',
              summary: 'Rejected',
              detail: 'You have rejected',
            },
          ];
          this.getLatestUser();
          this.dltUserRcrd = null;
        },
      });
    }else {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      this.commonService.createUser(this.registerForm.value).subscribe((response) => {
        this.getLatestUser();
      });
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Record added'});
      this.registerForm.reset();
      this.submitted = false;
    }
  }

  getLatestUser() {
    this.commonService.getAllUser().subscribe((response) => {
        this.allUser = response;
    });
  }

  editUser(user) {
    this.isEdit = true;
    this.userObj = user;
  }

  updateUser() {
    this.submitted = true;
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(() => {
      this.getLatestUser();
    });
    this.messageService.add({severity:'info', summary: 'Info', detail: 'Record Updated'});
    this.registerForm.reset();
    this.submitted = false;
  }

  deleteUser(dltUser) {
    
    // console.log(dltUser.id);
    // this.deleteUserRecord = dltUser.id;
    // console.log(this.deleteUserRecord);

    // this.messageService.add({
    //   severity: 'error',
    //   summary: 'Error',
    //   detail: 'Click on Save button for Delete Rrcord and Save changes',
    // });
    
    //this.cpyAllUser =JSON.parse(JSON.stringify(this.allUser))
     this.deletedUserObject = this.allUser
     for(let userList of this.deletedUserObject) {
        if(dltUser.id === userList.id){
          this.deletedUserObject.splice(this.deletedUserObject.indexOf(userList), 1)
          break;
        }
     }
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Click on Save button for Delete Rrcord from the backend',
      });
     this.dltUserRcrd = dltUser.id;
     return this.dltUserRcrd;

    // this.commonService.deleteUser(user).subscribe(()=>{
    //   this.getLatestUser();
    // })
    
  }

  finalDeleteData() {
    if(this.deleteUserRecord){
      this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.msgs = [
            { severity: 'info', summary: 'Confirmed', detail: 'Record deleted' },
          ];
          this.commonService.deleteUser(this.deleteUserRecord).subscribe(() => {
            this.getLatestUser();
            this.deleteUserRecord = null;
          });
        },
        reject: () => {
          this.msgs = [
            {
              severity: 'info',
              summary: 'Rejected',
              detail: 'You have rejected',
            },
          ];
        },
      });
    }
    //this.allUser = this.cpyAllUser
  }
}
