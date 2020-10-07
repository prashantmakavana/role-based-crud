import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) { }

    getFilesystem() {
    return this.http.get<any>('assets/treeTable.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getFileHeaderSystem() {
      return this.http.get('assets/header.json');
    }
    // getLazyFilesystem() {
    //     return this.http.get<any>('assets/treetableLazy1.json')
    //       .toPromise()
    //       .then(res => <TreeNode[]>res.data);
    //     }

}