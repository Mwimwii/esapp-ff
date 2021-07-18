import { Component, OnInit } from '@angular/core'
import { data } from './evaluations.config'

@Component({
  selector: 'app-mgf-evaluations',
  templateUrl: './evaluations.component.html',
})
export class MgfEvaluationsComponent implements OnInit {
  data = data

  constructor() {}
  ngOnInit() {}
}
