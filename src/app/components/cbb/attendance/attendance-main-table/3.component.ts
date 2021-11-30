import { Component, OnInit } from '@angular/core'
import { EsappRequestHandlerService } from '../../../../esapp-request-handler.service'
import { DataService } from '../../../../services/data-service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-attendance-main-tables-3',
  templateUrl: './faabs-attendance-table.component.html',
  styleUrls: ['./faabs-attendance-table.component.scss'],
})
export class AppAttendanceMainTableComponent implements OnInit {
  constructor(private http: DataService) {}
  ngOnInit() {
    this.http.getFaabsTopics()
      .subscribe((data:[]) => {
        this.tableData = data
      })
  }
  tableData: []
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
