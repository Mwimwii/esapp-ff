import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-soc-table-detail',
  templateUrl: './soc-table-detail.component.html',
  styleUrls: ['./soc-table-detail.component.scss'],
})
export class AppSocTableDetailComponent implements OnInit {
  @Input('data') data: any = {}
  constructor() {}
  ngOnInit() {}
}
