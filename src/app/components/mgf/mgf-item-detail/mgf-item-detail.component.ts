import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-mgf-item-detail',
  templateUrl: './mgf-item-detail.component.html',
  styleUrls: ['./mgf-item-detail.component.scss'],
})
export class MGFItemDetailComponent implements OnInit {
  @Input('data') data: any = {}
  constructor() {}
  ngOnInit() {}
}
