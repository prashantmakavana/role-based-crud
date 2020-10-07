import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { IUser } from '../user';

import { CommonService } from '../common.service';
import {CheckboxModule} from 'primeng/checkbox';

// Prime NG Module
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let element: HTMLElement;
  let inputEl: DebugElement;
  let control = {
    value: 'Unit Test',
    label: 'Name',
    floating: true,
    attribute: {
      attributeName: 'Input',
    },
  };
  let users: IUser[] = [];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        BrowserModule,
        HttpClientTestingModule, 
        InputTextModule,
        ButtonModule,
        DropdownModule,
        CheckboxModule,
        StoreModule.forRoot({}, {})
        
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserComponent);
      component = fixture.componentInstance;
    })  
  }));

  beforeEach(() => {
    inputEl = fixture.debugElement;
    component = fixture.componentInstance;
    component.attribute = control.attribute;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


  it('should have "p-grid" class contain a "p-col-fixed" class ', () => {
    //debugger
    const ClassText = 'p-grid';
    component.class = ClassText;
    fixture.detectChanges();
    const classNameE1 = fixture.debugElement.query(By.css('.p-ai-start')).nativeElement;
    expect(classNameE1).toEqual('p-grid');
  });
});
