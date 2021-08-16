import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'app-soc-instructions',
  templateUrl: './soc-instructions.component.html',
  styleUrls: ['./soc-instructions.component.scss'],
})
export class StoriesOfChangeInstructionsComponent implements OnInit {
  instructions: string[] = [""]
  constructor() {}
  ngOnInit(): void {}
}
