import { Component, OnInit, Input } from '@angular/core'
import { EsappRequestHandlerService } from '../../../../../esapp-request-handler.service'

@Component({
  selector: 'app-view-past-registration-form',
  templateUrl: './view-past-registration-form.component.html',
  styleUrls: ['./view-past-registration-form.component.scss'],
})
export class ViewPastRegistrationFormComponent implements OnInit {
  @Input() data
  loading = false
  tableData = []

  constructor(private http: EsappRequestHandlerService) {}

  ngOnInit(): void {
    this.http.getDataAuthenticated('/attendance').subscribe(data => (this.tableData = data))
  }
  change(): void {
    this.loading = true
    if (this.data.length > 0) {
      setTimeout(() => {
        this.data = []
        this.loading = false
      }, 1000)
    } else {
      setTimeout(() => {
        this.data = [
          {
            title: 'Ant Design Title 1',
          },
          {
            title: 'Ant Design Title 2',
          },
          {
            title: 'Ant Design Title 3',
          },
          {
            title: 'Ant Design Title 4',
          },
        ]
        this.loading = false
      }, 1000)
    }
  }
}
