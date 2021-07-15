import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-attendance-main-tables-3',
  templateUrl: './3.component.html',
  styleUrls: ['./3.component.scss'],
})
export class AppAttendanceMainTableComponent implements OnInit {
  tableData = data
  createTable = true
  current: number = 0
  checklist: boolean = false
  constructor() {}
  ngOnInit() {}
  pre(): void {
    this.current -= 1
    this.changeContent()
  }
  next(): void {
    this.current += 1
    this.changeContent()
  }
  done(): void {
    console.log('done')
  }
  changeContent(): void {
    this.createTable = false
    this.checklist = false
    switch (this.current) {
      case 0: {
        this.createTable = true
        break
      }
      case 1: {
        this.checklist = true
        // this.index = 'Second-content';
        break
      }
      case 2: {
        // this.index = 'third-content';
        break
      }
      default: {
        // this.index = 'error';
      }
    }
  }
  expandSet = new Set<number>()
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id)
    } else {
      this.expandSet.delete(id)
    }
  }
}
