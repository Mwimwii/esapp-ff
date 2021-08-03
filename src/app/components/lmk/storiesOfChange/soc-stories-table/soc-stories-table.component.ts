import { Component, OnInit, Input } from '@angular/core'
declare var require: any
const data: any = require('./data.json')
import { EsappRequestHandlerService } from '../../../../esapp-request-handler.service'
@Component({
  selector: 'app-stories-of-change-table',
  templateUrl: './soc-stories-table.component.html',
  styleUrls: ['./soc-stories-table.component.scss'],
})
export class AppStoriesOfChangeTableComponent implements OnInit {
  @Input() route : string;
  tableData = data;
  // tableData : any[];
  createTable = true
  current: number = 0
  checklist: boolean = false
  constructor(private http: EsappRequestHandlerService) {}
  ngOnInit() {
    // this.http.getDataAuthenticated(this.route)
    //   .subscribe(data => this.tableData = data)
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
