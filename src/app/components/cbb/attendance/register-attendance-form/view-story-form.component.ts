import { Component, OnInit } from '@angular/core'
import { EsappRequestHandlerService } from '../../../../esapp-request-handler.service'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { NzNotificationService } from 'ng-zorro-antd/notification'

@Component({
  selector: 'app-register-attendants-form',
  templateUrl: './view-story-form.component.html',
  styleUrls: ['./view-story-form.component.scss'],
})
export class RegisterAttendantsFormComponent implements OnInit {
  loading = false
  data = []
  listOfAllData: any[] = []
  isAllDisplayDataChecked = false
  isOperating = false
  isIndeterminate = false
  mapOfCheckedId: { [key: string]: boolean } = {}
  numberOfChecked = 0
  listOfDisplayData: any[] = []

  // formly forms
  form = new FormGroup({})
  model = {}
  fields =  [{
      key: "topic",
      type: 'select',
      templateOptions: {
        type: 'text',
        label: "Topic",
        placeholder: "Select a Topic",
        options: []
      },
    }]

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
  constructor(private http: EsappRequestHandlerService, private notification: NzNotificationService) {}

  ngOnInit(): void {
    this.http.getDataAuthenticated('/farmers')
      .subscribe(data => this.listOfAllData = data)
    this.http.getDataAuthenticated('/topics')
      .subscribe(data => this.fields[0]
                                  .templateOptions.options = data.map(item => {
                                                                                return {
                                                                                  "value": {
                                                                                    "id": item.id,
                                                                                    "value": item.topic,
                                                                                    "topic_indicator":item.output_level_indicator,
                                                                                    "topic_subcomponent":item.subcomponent,
                                                                                  },
                                                                                  "label":item.topic,
                                                                                }}))

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

  submit(model: any){
    // get choices
    this.listOfAllData
      .filter(item => this.mapOfCheckedId[item.id])
      .map(item => { return{
        farmer_id: item.id,
        faabs_group_id: 1,
        topic: this.model["topic"].value,
        facilitators: "Facilitator names",
        partner_organisations: "Orginazation",
        training_date: new Date(),
        duration: "2:30",
        created_by: 10,
        updated_by: 10,
        full_names: item.first_name + " " + item.other_names + item.last_name,
        youth_non_youth: "Non Youth",
        marital_status: item["marital_status"],
        sex: item["sex"],
        year_of_birth: "1992",
        quarter: "2",
        topic_indicator: this.model["topic"].topic_indicator,
        topic_subcomponent: this.model["topic"].topic_subcomponent,
        training_type: "Participants under non-Direct/Other Training [Stream 2]"}
      })
      .forEach(item => this.http.postDataAuthenticated('/attendances', item)
                      .subscribe(console.log)

  )
  this.notification.success('Attendance Marked', 'Attendance have been successfully marked!')

  }



}
