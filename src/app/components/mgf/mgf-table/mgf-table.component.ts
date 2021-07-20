import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-mgf-tables',
  templateUrl: './mgf-table.component.html',
  styleUrls: ['./mgf-table.component.scss'],
})
export class MGFTableComponent implements OnInit {
  @Input() data: any = {}
  tableData = {}
  createTable = true
  current: number = 0
  checklist: boolean = false
  constructor() {}
  ngOnInit() {
    this.tableData = this.data.data
  }
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
