import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HomeComponent } from './home.component';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CommonService } from '../common.service';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let element: HTMLElement;
  let inputEl: DebugElement;
  let control = {
    value: 'Test Name',
    label: 'Name',
    floating: true,
    attribute: {
      attributeName: 'Input',
      displayName: 'Input',
      isMandatory: true,
      hasSelection: false,
      enableKeyEvent: true,
      isClear: true,
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        BrowserModule,
        HttpClientTestingModule, 
        InputTextModule,
        ButtonModule,
        DropdownModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
    })     
  }));

  beforeEach(() => {
    inputEl = fixture.debugElement;
    component = fixture.componentInstance;
    component.attribute = control.attribute;
    fixture.detectChanges();
  });


 // Test Cases for Prime NG

  it('value are false', () => {
    expect(component.isEdit).toBe(false);
  });

  it('ngOnInit funcation called or not ', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('getLatestUser funcation called or not ', () => {
    spyOn(component, 'getLatestUser');
    component.getLatestUser();
    expect(component.getLatestUser).toHaveBeenCalled();
  });

  it('should bind input text value to Component property', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#name');
    const mobileInput: HTMLInputElement = hostElement.querySelector('#mobile');
    fixture.detectChanges();
    nameInput.value = '';
    mobileInput.value = '';
    nameInput.dispatchEvent(new Event('input'));
    mobileInput.dispatchEvent(new Event('input'));
    expect(component.userObj.name).toBe('');
    expect(component.userObj.mobile.toString()).toBe('');
  });




});
