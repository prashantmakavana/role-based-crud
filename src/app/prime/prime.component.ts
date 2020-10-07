import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {NodeService} from './nodeservice';
import { Dropdown } from 'primeng/dropdown';

interface City {
  name: string,
  code: string
}

export interface SelectItem {
  label?: string;
  value: any;
  styleClass?: string;
  icon?: string;
  title?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.scss']
})
export class PrimeComponent implements OnInit {

  @Input() selected: boolean;
  @Input() attribute: any;
  @Input() showClear = true;
  @Input() editable: boolean = false;
  
  @Input() option: SelectItem;

  @ViewChild('pDropdown') child:  Dropdown;

  public disabled : true;
  public dropdownSelectedValue: string;
  public placeholder: string;
  public name: string

  public icon: string;
  public disableCreate: boolean;
  public label: string;
  public header: string;
  allUser: any;
  isEdit:any = false;
  public text: 'Crud';
  public value: boolean;

  files: TreeNode[];
  cols: any[];
  selectedNodes3: TreeNode[];
  totalRecords: number;
  loading: boolean;
  _selectedColumns: any[];
  headerData: any;

  cities: City[];
  selectedCity1: City;
  selectedCity2: City;
  selectedCountries1: string[] = [];
  countries: any[];

  overlayVisible: true;

 
  options: any[];

  @Output() onClick: EventEmitter<any> = new EventEmitter();

    onOptionClick(event: Event) {
        this.onClick.emit({
            originalEvent: event,
            option: this.option
        });
    }

  constructor(private nodeService: NodeService) { 

      this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];

    this.countries = [
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


  }

  ngOnInit(): void {
    this.nodeService.getFilesystem()
    .then(
      files => this.files = files
    );

    // this.nodeService.getFileHeaderSystem()
    //   .subscribe((response) => {
    //     this.headerData = response;
    //     this.cols = this.headerData;
    //     console.log(this.cols);
    //   });

      this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'size', header: 'Size' },
        { field: 'category', header: 'Category' }
      ];
      
    //  console.log(this.cols);
    this._selectedColumns = this.cols;
     // console.log(this.selectedColumns);
      //this.totalRecords = 1000;
      //this.loading = true;
  }

  onCitySelect(city){
  // console.log(city[1].name);
   this.dropdownSelectedValue = city[1].name
  }

  
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
}

set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
}

  // loadNodes(event) {
  //    this.loading = true;
  //     setTimeout(() => {
  //       this.loading = false;
  //       this.files = [];
  //       for(let i = 0; i < event.rows; i++) {
  //           let node = {
  //               data: {  
  //                   name: 'Item ' + (event.first + i),
  //                   size: Math.floor(Math.random() * 1000) + 1 + 'kb',
  //                   type: 'Type ' + (event.first + i)
  //               },
  //               leaf: false
  //           };
           
  //           this.files.push(node);
  //       }
  //   }, 1000);
  // }

}
