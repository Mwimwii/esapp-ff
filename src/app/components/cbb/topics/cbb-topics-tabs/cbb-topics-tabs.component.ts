import { Component, OnInit } from '@angular/core'
declare var require: any

@Component({
  selector: 'app-cbb-topics-tabs',
  templateUrl: './cbb-topics-tabs.component.html',
  styleUrls: ['./cbb-topics-tabs.component.scss'],
})
export class CbTopicsTabsComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

  expandSet = new Set<number>()
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id)
    } else {
      this.expandSet.delete(id)
    }
  }
}
