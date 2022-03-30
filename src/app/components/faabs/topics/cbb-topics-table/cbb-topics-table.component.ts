import { Component, OnInit } from '@angular/core'
declare let require: any
const data: any = require('./data.json');

@Component({
  selector: 'app-cbb-topics-table',
  templateUrl: './cbb-topics-table.component.html',
  styleUrls: ['./cbb-topics-table.component.scss'],
})
export class CbTopicsTableComponent implements OnInit {
  tableData = data

  constructor() {}
  ngOnInit() {}

  expandSet = new Set<number>()
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id)
    } else {
      this.expandSet.delete(id)
    }
  }
}
