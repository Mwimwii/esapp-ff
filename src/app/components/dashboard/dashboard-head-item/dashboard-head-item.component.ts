import { Component, OnInit, Input } from '@angular/core'
import { EsappRequestHandlerService } from '../../../esapp-request-handler.service'
@Component({
  selector: 'app-dashboard-head-item',
  templateUrl: './dashboard-head-item.component.html',
  styleUrls: ['./dashboard-head-item.component.scss'],
})
export class DashboardHeadItemComponent implements OnInit {
  @Input() icon : string = 'fe-icon';
  @Input() title: string = 'Title';
  @Input() value: string;
  @Input() slug: string;

  constructor(private http: EsappRequestHandlerService) {}
  ngOnInit() {
    // get the value from the slug and display
  }
}
