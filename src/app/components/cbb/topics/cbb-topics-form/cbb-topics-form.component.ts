import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'app-cbb-topics-form',
  templateUrl: './cbb-topics-form.component.html',
  styleUrls: ['./cbb-topics-form.component.scss'],
})
export class CbTopicsFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  form = new FormGroup({})

  model = {}

  fields: FormlyFieldConfig[] = [
    {
      key: 'topic',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Topic',
        placeholder: 'Enter a Topic...',
        required: true,
      }
    },
    {
      key: 'Category',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Category',
        placeholder: 'Select a Category...',
        required: true,
      },
    },
    {
      key: 'sub-component',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Sub-Component',
        placeholder: 'Select a Sub-Component',
        required: true,
      },
    },
    {
        key: 'oli',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Output Level Indicator',
        placeholder: 'Select and Ouput Level Indicator',
        required: true,
      },
    },

  ]

  submit(model: any): void {
    if (!this.form.valid) return
  }
}
