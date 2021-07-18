import { Component, OnInit } from '@angular/core'
import { data } from './applications.config'

@Component({
  selector: 'app-mgf-applications',
  templateUrl: './applications.component.html',
})
export class MgfApplicationsComponent implements OnInit {
  data = data

  constructor() {}
  ngOnInit() {}
}
