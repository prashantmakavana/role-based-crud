import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../common/productservice';
import { CalenderService } from '../common/calenderservice';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
//import {FullCalendar} from 'primeng/fullcalendar';
import {Calendar} from '@fullcalendar/core';
import { MessageService } from 'primeng/api';

import { UploadService } from '../common/uploadService';

import { FileUpload } from 'primeng/fileupload';
import { forkJoin } from 'rxjs';

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  @ViewChild('fileInput') fileInput: FileUpload; 

  @ViewChild('calendar') private calendar: Calendar;

  // gotoDate(date: Date) {
  //     this.fc.getCalendar().gotoDate(date);
  // }

  sourceProducts: Product[];
  targetProducts: Product[];

  events: any[];
  options: any;
  header: any;

  uploadedFiles: any[] = [];
  attachments: any;
  deletedattachments: any;
  constructor(
    private productService: ProductService,
    private calenderService: CalenderService,
    private messageService: MessageService,
    private uploadService: UploadService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProductsSmall()
      .then((products) => (this.sourceProducts = products));
    this.targetProducts = [];

    this.calenderService.getEvents().then((events) => {
      this.events = events;
    });

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2017-02-01',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      editable: true,
    };
  }

      // onUpload(event) {
      //   for(let file of event.files) {
      //       this.uploadedFiles.push(file);
      //   }

      //   this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
      // }

      onSubmit(): void {
        const promiseList = [];
        const ObservableList = [];
        this.fileInput.files.forEach(file => {
          promiseList.push(this.uploadService.uploadFile(file));
        });
        if (promiseList.length) {
          forkJoin(promiseList).subscribe(
            files => {
              const date = new Date();
              files.forEach(file => {
                this.attachments.push({
                  originalname: file['originalname'],
                  uploadname: file['uploadname'],
                  uploadtime: date.getDate()
                });
              });
            },
            err => {
              console.log(err);
            }
          );
        }
      }
      //Maintain delete list
      deleteFile(list, index) {
      this.deletedattachments.push(this.attachments[index]);
      this.attachments.splice(index, 1);
      }
}
