import { Component, OnInit, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'app-mgf-form',
  templateUrl: './mgf-form.component.html',
  styleUrls: ['./mgf-form.component.scss'],
})
export class MGFFormComponent implements OnInit {
  @Input() formFieldsData: any = []

  form = new FormGroup({})
  model = {}
  fields: FormlyFieldConfig[] = []

  constructor() {}
  ngOnInit(): void {
    this.fields = this.formFieldsData
    console.log('Fields Debug')
    console.log(this.fields)
  }

  submit(model: any): void {
    if (!this.form.valid) return
  }
}
