import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'app-cbb-topics-form',
  templateUrl: './cbb-topics-form.component.html',
  styleUrls: ['./cbb-topics-form.component.scss'],
})
export class CbTopicsFormComponent implements OnInit {
  createTable = true
  current: number = 0
  checklist: boolean = false
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
      },
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
    if (!this.form.valid) {
      return
    }
  }
  pre(): void {
    this.current -= 1
    this.changeContent()
  }
  next(): void {
    this.current += 1
    this.changeContent()
  }
  done(): void {
    console.log('done')
  }
  changeContent(): void {
    this.createTable = false
    this.checklist = false
    switch (this.current) {
      case 0: {
                this.createTable = true
                break;
            }
      case 1: {
                this.checklist = true
                // this.index = 'Second-content';
                break;
      }
      case 2: {
        // this.index = 'third-content';
            break;
      }
      default: {
        // this.index = 'error';
            }
    }
  }
}
