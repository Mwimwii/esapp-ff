// This  will be good for a task tray component

import { Component, OnInit } from '@angular/core';
declare let require: any;
const data: any = require('./data.json');

@Component({
    selector: 'app-dashboard-tasks-table',
    templateUrl: './dashboard-tasks-table.component.html',
    styleUrls: ['./dashboard-tasks-table.component.scss'],
})
export class DashboardTasksTableComponent implements OnInit {
    isAllDisplayDataChecked: boolean = false
    isIndeterminate: boolean = false
    listOfDisplayData = data
    listOfAllData = data
    mapOfCheckedId = { 1: true, 2: true, 3: true }

    currentPageDataChange($event): void {
        this.listOfDisplayData = $event;
        this.refreshStatus();
    }

    refreshStatus(): void {
        this.isAllDisplayDataChecked = this.listOfDisplayData
            .filter(item => !item.disabled)
            .every(item => this.mapOfCheckedId[item.id]);
        this.isIndeterminate =
      this.listOfDisplayData
          .filter(item => !item.disabled)
          .some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
    }

    checkAll(value): void {
        this.listOfDisplayData
            .filter(item => !item.disabled)
            .forEach(item => (this.mapOfCheckedId[item.id] = value));
        this.refreshStatus();
    }
    constructor() {}
    ngOnInit() {}
}
