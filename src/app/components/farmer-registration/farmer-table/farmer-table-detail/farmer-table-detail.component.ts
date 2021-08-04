import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-farmer-table-detail',
  templateUrl: './farmer-table-detail.component.html',
  styleUrls: ['./farmer-table-detail.component.scss'],
})
export class AppFarmerTableDetailComponent implements OnInit {
  @Input('data') data: any = {}
  constructor() {}
  ngOnInit() {}
}
