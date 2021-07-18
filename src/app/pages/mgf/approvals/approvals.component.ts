import { Component, OnInit } from '@angular/core'
import { data } from './approvals.config'

@Component({
  selector: 'app-mgf-approvals',
  templateUrl: './approvals.component.html',
})
export class MgfApprovalsComponent implements OnInit {
  data = data

  constructor() {}
  ngOnInit() {}
}
