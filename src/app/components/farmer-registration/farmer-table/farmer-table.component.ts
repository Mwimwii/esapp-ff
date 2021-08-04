import { Component, OnInit, Input } from '@angular/core'
import { EsappRequestHandlerService } from '../../../esapp-request-handler.service'
declare var require: any

@Component({
  selector: 'app-farmer-table',
  templateUrl: './farmer-table.component.html',
  styleUrls: ['./farmer-table.component.scss'],
})
export class AppFarmerTableComponent implements OnInit {
  // tableData = data
  @Input() route: string;
  tableData : any[];
  createTable = true
  current: number = 0
  checklist: boolean = false
  constructor(private http: EsappRequestHandlerService) {}
  ngOnInit() {
    this.http.getDataAuthenticated(this.route)
      .subscribe(data => this.tableData = data)
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
