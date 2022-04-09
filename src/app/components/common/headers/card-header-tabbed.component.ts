import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'headers-card-header-tabbed',
  templateUrl: './card-header-tabbed.component.html',
  styleUrls: ['./card-header-tabbed.component.scss'],
})
export class HeaderTabbedComponent implements OnInit {
  @Input() data: any = {
    title: 'Pills',
  }

  constructor() {}
  ngOnInit() {}
}
