import { Component, OnInit } from '@angular/core'
import { EsappRequestHandlerService } from '../../../../esapp-request-handler.service'
declare var require: any

@Component({
  selector: 'app-attendance-main-tables-3',
  templateUrl: './3.component.html',
  styleUrls: ['./3.component.scss'],
})
export class AppAttendanceMainTableComponent implements OnInit {
  constructor(private http: EsappRequestHandlerService) {}
  ngOnInit() {
    this.http.getDataAuthenticated('/topics')
      .subscribe(data => {
        this.tableData = data
        // this.tableData = data.map(item => {
        //                           return {
        //                             topic: item.topic,
        //                             date: item.training_date}
        //                         })
      })
  }


  tableData: any[]
  createTable = true
  current: number = 0
  expandSet = new Set<number>()


  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id)
    } else {
      this.expandSet.delete(id)
    }
  }
}
