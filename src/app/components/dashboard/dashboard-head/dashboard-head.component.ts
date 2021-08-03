import { Component, OnInit } from '@angular/core'
import {EsappRequestHandlerService} from '../../../esapp-request-handler.service'

@Component({
  selector: 'app-dashboard-head',
  templateUrl: './dashboard-head.component.html',
  styleUrls: ['./dashboard-head.component.scss'],
})
export class DashboardHeadComponent implements OnInit {
  commodity_prices: number = 2233;

  constructor(private http: EsappRequestHandlerService) {}
  ngOnInit() {
    this.http.getDataAuthenticated('commodity_prices')

  }


}
