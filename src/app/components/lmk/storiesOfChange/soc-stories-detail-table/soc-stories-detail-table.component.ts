import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-stories-of-change-table-bootstrap-4',
  templateUrl: './soc-stories-detail-table.component.html',
  styleUrls: ['./soc-stories-detail-table.component.scss'],
})
export class AppStoriesOfChangeTablesBootstrap4Component implements OnInit {
  @Input('data') data: any = {}
  constructor() {}
  ngOnInit() {}
}
