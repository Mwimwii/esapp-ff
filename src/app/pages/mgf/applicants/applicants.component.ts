import { Component, OnInit } from '@angular/core'
import { data } from './applicants.config'

@Component({
  selector: 'app-mgf-applicants',
  templateUrl: './applicants.component.html',
})
export class MgfApplicantsComponent implements OnInit {
  data = data

  constructor() {}
  ngOnInit() {}
}
