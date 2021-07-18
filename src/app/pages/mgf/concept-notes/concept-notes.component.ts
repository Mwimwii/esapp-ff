import { Component, OnInit } from '@angular/core'
import { data } from './concept-notes.config'

@Component({
  selector: 'app-mgf-concept-notes',
  templateUrl: './concept-notes.component.html',
})
export class MgfConceptNotesComponent implements OnInit {
  data = data

  constructor() {}
  ngOnInit() {}
}
