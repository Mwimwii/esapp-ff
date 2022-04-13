import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core'
import { EsappRequestHandlerService } from '../../../../esapp-request-handler.service'
import { NzNotificationService } from 'ng-zorro-antd/notification'

@Component({
  selector: 'app-prices-form',
  templateUrl: './prices-form.component.html',
  styleUrls: ['./prices-form.component.scss'],
})
export class PricesFormComponent implements OnInit {
  form = new FormGroup({})
  model: any = {}
  options: FormlyFormOptions = {}
  loading: boolean = false


  formFields = [
    {
      key: 'market',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Market',
        placeholder: 'Select Market',
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
          { value: 'Grain', label: 'Grain' },
          { value: 'Oats', label: 'Oats' },
          { value: 'Livestock', label: 'Livestock' },
          { value: 'Poultry', label: 'Poultry' },
        ],
      },
    },
    {
      key: 'price_level',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Price Level',
        placeholder: 'Select Price Level',
        required: true,
        options: [
          { value: 'low', label: 'Low' },
          { value: 'mid', label: 'Mid' },
          { value: 'high', label: 'High' },
        ],
      },
    },
    {
      key: 'unit',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Unit',
        placeholder: '100g,1kg',
        options: [
          { value: '0.0000001', label: 'tonne' },
          { value: '0.001', label: 'kg' },
          { value: '.01', label: 'g' },
          { value: '0.065', label: 'meda 250 ml' },
          { value: '0.005', label: 'meda 5 litres' },
        ],
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
    }
  ]

  fields: FormlyFieldConfig[] =[]

  constructor(private http: EsappRequestHandlerService,  private notification: NzNotificationService) {}

  ngOnInit(): void {
    // Generate the form
    this.fields = [
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
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          { className: 'col-6', ...this.formFields[5] },
          { className: 'col-3', ...this.formFields[6] },
          { className: 'col-3', ...this.formFields[7] },
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
  }

  submit(model: any): any {
  this.loading = true
  this.http.postDataAuthenticated('/market/submit', this.model).subscribe(data=> {
      this.notification.success('Commodity Added', 'Commodity Price added')
      this.loading = false
    }, error => this.notification.error('Fatal', JSON.stringify(error)))

  }
}
