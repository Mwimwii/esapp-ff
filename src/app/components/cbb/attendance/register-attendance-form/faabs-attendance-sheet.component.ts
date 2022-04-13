import { Component, OnInit, Input } from '@angular/core'
import { DataService } from '../../../../services/data-service'
import { FormGroup } from '@angular/forms'
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core'
import { dateDiffInDays, genericField } from 'src/app/utils'
import { FaabsAPI } from 'src/app/types'
import { EsappRequestHandlerService } from 'src/app/esapp-request-handler.service'

@Component({
  selector: 'app-register-attendants-form',
  templateUrl: './faabs-attendance-sheet.component.html',
  styleUrls: ['./faabs-attendance-sheet.component.scss'],
})
export class FaabsAttendanceSheetComponent implements OnInit {
  loading = false
  data = []
  listOfAllData: any[] = []
  isAllDisplayDataChecked = false
  isOperating = false
  isIndeterminate = false
  mapOfCheckedId: { [key: string]: boolean } = {}
  numberOfChecked = 0
  listOfDisplayData: any[] = []
  @Input() faabs: FaabsAPI;


  faabsFacilitators = "ESAPP";
  faabsPartnerOrg = "IFADD"

  form = new FormGroup({})
  model = {};
  topics;
  fields: FormlyFieldConfig[]

  currentPageDataChange($event: any[]): void {
    this.listOfDisplayData = $event
    this.refreshStatus()
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .filter(item => !item.disabled)
      .every(item => this.mapOfCheckedId[item.id])
    this.isIndeterminate =
      this.listOfDisplayData
        .filter(item => !item.disabled)
        .some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked
    this.numberOfChecked = this.listOfAllData.filter(item => this.mapOfCheckedId[item.id]).length
  }
  constructor(
    private httpHandler: EsappRequestHandlerService,
    private http: DataService, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.http.getAllFarmers().subscribe((resp: { [key: string]: [] }) => {
      this.listOfAllData = resp.farmers
    })
    this.fields = ([

      {
        templateOptions: { label: "Partner Organizer" },
        fieldGroupClassName: 'row',
        fieldGroup: []
      },
      {
        templateOptions: { label: "Partner Organizer" },
        fieldGroupClassName: 'row',
        fieldGroup: [
          { className: 'col-6', ...genericField('facilitators', 'Facilitators', 'Enter a Facillitator') },
          { className: 'col-6', ...genericField('partnerOrganisations', 'Partner Organisations', 'Enter a Partner Organisation') },
        ]
      },
      {
        templateOptions: { label: "Date" },
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'trainingDate',
            type: 'input',
            className: 'col-md-6',
            templateOptions: {
              type: 'date',
              label: 'Training Start Date',
              placeholder: 'YYYY/MM/DD',
              required: true,
            },
          },
          {
            key: 'trainingEndDate',
            type: 'input',
            className: 'col-md-6',
            templateOptions: {
              type: 'date',
              label: 'Training End Date',
              placeholder: 'YYYY/MM/DD',
              required: true,
            },
          },
        ]
      },
      {
        templateOptions: { label: "Date" },
        fieldGroupClassName: 'row',
        fieldGroup: [{
          key: "topic",
          type: 'select',
          className: 'col-md-12',
          templateOptions: {
            type: 'text',
            label: "Topic",
            placeholder: "Select a Topic",
            options: this.faabs.topics,
            labelProp: 'subComponent',
            valueProp: 'id',
          },
        },
          {
            key: 'quarter',
            type: 'select',
            className: 'col-md-3',
            templateOptions: {
              type: 'number',
              label: 'Quarter',
              placeholder: '1',
              options: [
                { value: '1', label: 'First' },
                { value: '2', label: 'Second' },
                { value: '3', label: 'Third' },
                { value: '4', label: 'Fourth' },
              ],
            },
          },
        ]
      },
    ])
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData
      .filter(item => !item.disabled)
      .forEach(item => (this.mapOfCheckedId[item.id] = value))
    this.refreshStatus()
  }

  operateData(): void {
    this.isOperating = true
    setTimeout(() => {
      this.listOfAllData.forEach(item => (this.mapOfCheckedId[item.id] = false))
      this.refreshStatus()
      this.isOperating = false
    }, 1000)
  }

  submit() {
    this.model['farmers'] = this.listOfAllData
                            // .filter(farmer => this.mapOfCheckedId[farmer.id])
                            .map(farmer => farmer.id)

    this.model['duration'] = dateDiffInDays(new Date(this.model['trainingDate']), new Date(this.model['trainingEndDate']))
    console.log(this.model)
    // this.http.postFaabsAttendance(item).subscribe(data => console.log(data))
    // }).forEach(item => alert(JSON.stringify(item))
    this.notification.success('Attendance Marked', 'Attendance have been successfully marked!')
    if(this.form.valid){
      this.httpHandler.postDataAuthenticated(`/faabs/${this.faabs.id}/attendance/submit`, this.model)
      .subscribe(data => this.notification.success('Faabs Sheet Completed', 'Farmer successfully registered!'),
                 error => this.notification.error('Error', error))
    }
  }



}
