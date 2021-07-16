import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'app-prices-form',
  templateUrl: './prices-form.component.html',
  styleUrls: ['./prices-form.component.scss'],
})
export class PricesFormComponent implements OnInit {
  form = new FormGroup({})
  model: any = {}
  options: FormlyFormOptions = {}

  formFields = [
    // Group 1
    {
      key: 'market',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Market',
        placeholder: 'Select Market',
        required: true,
        options: [
          { value: 1, label: 'Chilenge' },
          { value: 2, label: 'Foxdale' },
          { value: 3, label: 'Ngombe' },
          { value: 4, label: 'Obama' },
        ],
      },
    },
    {
      key: 'commodity_type',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Commodity Type',
        placeholder: 'Select Commodity Type',
        required: true,
        options: [
          { value: 1, label: 'Grain' },
          { value: 2, label: 'Oats' },
          { value: 3, label: 'Livestock' },
          { value: 4, label: 'Poultry' },
        ],
      },
    },

    //Group 2
    {
      key: 'price_level',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Price Level',
        placeholder: 'Select Price Level',
        required: true,
        options: [
          { value: 1, label: 'Low' },
          { value: 2, label: 'Mid' },
          { value: 3, label: 'High' },
        ],
      },
    },

    // Group 3
    {
      key: 'unit',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Unit',
        placeholder: '100g,1kg',
        required: true,
      },
    },
    {
      key: 'price',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Price(ZMW)',
        placeholder: 'ZMW',
        required: true,
      },
    },
  ]

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        { className: 'col-6', ...this.formFields[0] },
        { className: 'col-6', ...this.formFields[1] },
      ],
    },
    {
      className: 'section-label',
      template: '<hr /><div><strong>Price and Price Level(Example Section):</strong></div>',
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        { className: 'col-6', ...this.formFields[2] },
        { className: 'col-3', ...this.formFields[3] },
        { className: 'col-3', ...this.formFields[4] },
      ],
    },
    { template: '<hr />' },
    {
      type: 'checkbox',
      key: 'otherToo',
      templateOptions: {
        label: 'I agree to that this information is accurate and verifiable',
      },
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  submit(model: any): void {
    if (!this.form.valid) return
  }
}
