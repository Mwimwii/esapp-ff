import { Component, OnInit } from '@angular/core'
import { data } from './organizations.config'
@Component({
  selector: 'app-mgf-org',
  templateUrl: './org.component.html',
})
export class MgfOrgComponent implements OnInit {
  data = data
  constructor() {}

  ngOnInit() {}
}
