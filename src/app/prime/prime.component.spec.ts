import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeComponent } from './prime.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CommonService } from '../common.service';
import {CheckboxModule} from 'primeng/checkbox';

// Prime NG Module
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {NodeService} from './nodeservice';
import {MultiSelectModule} from 'primeng/multiselect';

interface City {
  name: string,
  code: string
}


describe('PrimeComponent', () => {
  let component: PrimeComponent;
  let fixture: ComponentFixture<PrimeComponent>;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        BrowserModule,
        HttpClientTestingModule, 
        InputTextModule,
        ButtonModule,
        DropdownModule,
        CheckboxModule,
        DropdownModule,
        MultiSelectModule
      ],
      providers: [
        NodeService 
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(PrimeComponent);
      component = fixture.componentInstance;
    })  
  }));

  beforeEach(() => {
    inputEl = fixture.debugElement;
    component = fixture.componentInstance;
    component.attribute = control.attribute;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Prime NG ngOnInit funcation called or not ', () => {
  //   spyOn(component, 'ngOnInit');
  //   component.ngOnInit();
  //   expect(component.ngOnInit).toHaveBeenCalled();
  // });

  // it('should have Placeholder value as "Small"', () => {
  //   const placeholderText = 'Small';
  //   component.placeholder = placeholderText;
  //   fixture.detectChanges();
  //   let placeholder = inputEl.nativeElement.querySelector('input').placeholder;
  //   expect(placeholder).toEqual('Small');
  // });

//   it('should display the icon', () => {
//   component.icon = 'pi pi-check';
//   fixture.detectChanges();
//   const buttonEl = fixture.debugElement.query(By.css('.col-3'));
//   expect(buttonEl.nativeElement.className).toContain('p-button-secondary');
// });


  // it('should button disable or not ', () => {
  //   fixture.detectChanges();
  //   expect(inputEl.nativeElement.querySelector('button').disabled).toBeFalsy();
  // });

  // it('should display the title', () => {
  //   component.header = "Dashboard Data";
  //   fixture.detectChanges();
  //   const cardEl = fixture.debugElement.query(By.css('.col-3')).nativeElement;
  //   expect(cardEl.textContent).toEqual("Dashboard Data");
  // });

  // it('should have a card header', () => {
  //   fixture.detectChanges();
  //   const headerEl = fixture.debugElement.query(By.css('style')).nativeElement;
  //   expect(headerEl).toBeTruthy();
  // });


  // it('should have button label as "Secondary"', () => {
  //   debugger
  //   const labelText = 'Secondary';
  //   component.label = labelText;
  //   fixture.detectChanges();
  //   let label = inputEl.nativeElement.query(By.css('col-3')).label;
  //   const cardEl = fixture.debugElement.query(By.css('.col-3')).nativeElement;
  //   expect(cardEl).toEqual('Secondary');
  // });


  // it('checkbox is checked if value is true', () => {
  //   component.value = true;
  //   fixture.detectChanges();
  //   const inEl = fixture.debugElement.query(By.css('#simpleInput'));
  //   expect(inEl.nativeElement.checked).toBe(false);
  // });

  it('should have Placeholder value as "Select a City"', () => {
    const placeholderText = 'Select a City';
    component.placeholder = placeholderText;
    fixture.detectChanges();
    let placeholder = fixture.debugElement.query(By.css('.dropdown-items')).nativeElement;
    expect(placeholder.textContent).toContain('Select a City');
  });

   it('should dropdown open when clicked', () => {
      fixture.detectChanges();
      const container = fixture.debugElement.query(By.css('.dropdown')).nativeElement;
      container.click();
      fixture.detectChanges();
      const dropdownPanel = fixture.debugElement.query(By.css('.dropdown-items'));
      expect(container.className).toContain('dropdown-items');
      expect(dropdownPanel).toBeTruthy();
  });

  it('should dropdown have a showClear button', () => {
      const showClearValue = 'showClear';
      component.attribute['showClear'] = showClearValue
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.nativeElement.query('p-dropdown').showClear).toEqual(showClearValue);
      });
  });

  it('should dropdown editable are false', () => {
      const dropdownEditable = false;
      const editableFalse = component.editable;
      expect(editableFalse).toEqual(dropdownEditable);
  });


  // it('should item selected', () => {
  //     debugger
  //     component.cities = [
  //       {name: 'New York', code: 'NY'},
  //       {name: 'Rome', code: 'RM'},
  //       {name: 'London', code: 'LDN'},
  //       {name: 'Istanbul', code: 'IST'},
  //       {name: 'Paris', code: 'PRS'}
  //     ];

  //     const optionMethodSpy = spyOn(component, 'onCitySelect').and.callThrough();
        //expect(optionMethodSpy).toBeTruthy();
  //     const e = fixture.debugElement.nativeElement.querySelectorAll('.dropdown-items');
  //     e[1].click();
  //     expect(component.onCitySelect).toHaveBeenCalledWith([{name: 'Rome', code: 'RM'}]);
  //     expect(component.dropdownSelectedValue).toBe('Rome');

  //     const container = fixture.debugElement.query(By.css('.dropdown')).nativeElement;
	// 	  container.click();
	// 	  fixture.detectChanges();
  
  //     const items = fixture.debugElement.query(By.css('.dropdown-items'));
  //     items.children[0].nativeElement.click();
  // });

  // it('should dropdown are disabled', () => {
  //   debugger
  //   component.disabled = true;
  //   fixture.detectChanges();
  //   let dropdownDisable = fixture.debugElement.query(By.css('.dropdown')).nativeElement;
  //   expect(dropdownDisable.disabled).toEqual(true);
  // });

  it('should select the item', () => {
      component.countries = [
        {name: 'Australia', code: 'AU'},
        {name: 'Brazil', code: 'BR'},
        {name: 'China', code: 'CN'},
        {name: 'Egypt', code: 'EG'},
        {name: 'France', code: 'FR'},
        {name: 'Germany', code: 'DE'},
        {name: 'India', code: 'IN'},
        {name: 'Japan', code: 'JP'},
        {name: 'Spain', code: 'ES'},
        {name: 'United States', code: 'US'}
    ];
    fixture.detectChanges();
    component.selectedCountries1 = component.countries
    expect(component.selectedCountries1).toEqual(component.countries);;

  });

 
});
