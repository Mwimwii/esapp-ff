import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-cbb-topics-detail',
  templateUrl: './cbb-topics-detail.component.html',
  styleUrls: ['./cbb-topics-detail.component.scss'],
})
export class CbTopicsDetailComponent implements OnInit {
  @Input('data') data: any = {}
  constructor() {}
  ngOnInit() {}
}
