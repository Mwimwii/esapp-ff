import { Component, OnInit } from '@angular/core'
import { EsappRequestHandlerService } from '../../../../esapp-request-handler.service'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'interview-guide-table',
  templateUrl: './interview-guide-table.component.html',
  styleUrls: ['./interview-guide-table.component.scss'],
})
export class InterviewGuideTableComponent implements OnInit {
  tableData = data;
  loading : boolean;

  constructor(private httpService: EsappRequestHandlerService) {}
  get(): void {
    this.loading = true
    this.httpService.getDataAuthenticated('/ig')
      .subscribe(data => {
        this.tableData = data
        this.loading = false
      }, error => {this.loading=false})

  }
  ngOnInit() {
    this.get()
  }
}
