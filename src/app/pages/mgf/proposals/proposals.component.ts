import { Component, OnInit } from '@angular/core'
import { data } from './proposals.config'

@Component({
  selector: 'app-mgf-proposals',
  templateUrl: './proposals.component.html',
})
export class MgfProposalsComponent implements OnInit {
  data = data
  constructor() {}
  ngOnInit() {}
}
