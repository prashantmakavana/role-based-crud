import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  //gridOptions: GridOptions;
 //columnDefs: any[]
  public columnDefs;
 // rowData: any[];
  public rowData: any[];
  public  defaultColDef;
  public rowSelection;

  constructor(private http: HttpClient) {   

    // this.columnDefs = [
    //   {
    //     headerName: "Employee Name", 
    //     field: "employee_name"
    //   },
    //   {
    //     headerName: "Employee Salary", 
    //     field: "employee_salary"
    //   },
    //   {
    //     headerName: "Employee Age", 
    //     field: "employee_age",
    //     sortable: true,
    //     filter: true,
    //     filterParams: {
    //       buttons: ['apply', 'cancel'],
    //       closeOnApply: true,
    //     },
    //     cellClassRules: {
    //       'rag-green': 'x < 27',
    //       'rag-amber': 'x >= 33 && x < 35',
    //       'rag-red': 'x >= 26',
    //     }
    //   }
    // ];

    this.columnDefs = [
      {
        field: 'athlete',
        minWidth: 150,
      },
      {
        field: 'age',
        maxWidth: 90,
        filter: 'agNumberColumnFilter',
        filterParams: {
          buttons: ['apply', 'reset'],
          closeOnApply: true,
        },
        cellClassRules: {
          'rag-green': 'x < 20',
          'rag-amber': 'x >= 20 && x < 25',
          'rag-red': 'x >= 25',
        },
      },
      {
        field: 'country',
        minWidth: 150,
      },
      {
        field: 'year',
        maxWidth: 90,
      },
      {
        field: 'date',
        minWidth: 150,
      },
      {
        field: 'sport',
        minWidth: 150,
      },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];

      this.defaultColDef = {
        flex: 1,
        minWidth: 150,
        editable: true,
        filter: true,
       // floatingFilter: true,
        resizable: true,
      };

      // this.http.get<any>('assets/emp.json')
      //   .subscribe((res) => {
      //     this.rowData = res;
      //   })
      this.rowSelection = 'single';
  }

  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedRows();
    document.querySelector('#selectedRows').innerHTML =
      selectedRows.length === 1 ? selectedRows[0].athlete : '';
  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
      .get<any>(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .subscribe((data) => {
        this.rowData = data;
      });
  }

  

  // onBtExcludeMedalColumns() {
  //   this.gridApi.setColumnDefs(colDefsMedalsExcluded);
  // }

  // onBtIncludeMedalColumns() {
  //   this.gridApi.setColumnDefs(colDefsMedalsIncluded);
  // }

  // reverseItems() {
  //   immutableStore.reverse();
  //   this.gridApi.setRowData(immutableStore);
  // }

}


// var colDefsMedalsIncluded = [
//   {  field: 'age' },
 
// ];
//  var colDefsMedalsExcluded = [
//   {  field: 'age' },
// ];

//   columnDefs = [
//     {headerName: 'Make', field: 'make' , sortable: true},
//     {headerName: 'Model', field: 'model', sortable: true },
//     {headerName: 'Price', field: 'price', sortable: true}
// ];

//   rowData = [
//       { make: 'Toyota', model: 'Celica', price: 35000 },
//       { make: 'Ford', model: 'Mondeo', price: 32000 },
//       { make: 'Porsche', model: 'Boxter', price: 72000 }
//   ];


