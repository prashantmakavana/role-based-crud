import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CalenderService {
    
    constructor(private http: HttpClient) {}

    getEvents() {
        return this.http.get<any>('assets/calendarevents.json')
                    .toPromise()
                    .then(res => <any[]> res.data)
                    .then(data => { return data; });
    }
}
