import { Component, OnInit, Input } from '@angular/core'
import { DataService } from '../../../../services/data-service'
import { FormGroup } from '@angular/forms'
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { Observable } from 'rxjs'

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
  @Input() faabsGroupsId: number;

  faabs : Observable<any>;
  faabsTopics : {};
  faabsTopicsEnrollments : Observable<any>;
  faabsFacilitators = "ESAPP";
  faabsPartnerOrg = "IFADD"

  campOfficerID = 10
  // FormlyUploadField forms
  form = new FormGroup({})
  model = {};
  topics;
  fields =  [
    // {
    //   key: "topic",
    //   type: 'select',
    //   templateOptions: {
    //     type: 'text',
    //     label: "Topic",
    //     placeholder: "Select a Topic",
    //     options: []
    //   },
    // }
    ]

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
  constructor(private http: DataService, private notification: NzNotificationService) {}

  ngOnInit(): void {
    this.http.getCategoryAFarmers()
      .subscribe((data: []) => this.listOfAllData = data)
    this.http.getFaabsTopics()
      .subscribe((data: []) => {
        console.log("Topics")
        console.log(data)
        this.topics = data
      })
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
          faabs_group_id: this.faabsGroupsId,
          facilitators: this.faabsFacilitators,
          partner_organisations: this.faabsPartnerOrg,
          training_date: new Date(),
          duration: "2:30",
          quarter: "2",
          created_by: this.campOfficerID,
          updated_by: this.campOfficerID,

          topic: this.topics[0].topic,
          topic_indicator: this.topics[0].output_level_indicator,
          topic_subcomponent: this.topics[0].subcomponent,
          training_type: "Participants under non-Direct/Other Training [Stream 2]",

          farmer_id: item.id,
          full_names: item.first_name + " " + item.other_names + item.last_name,
          youth_non_youth: "Non Youth",
          marital_status: item["marital_status"],
          sex: item["sex"],
          year_of_birth: "1992",
        }
      }).forEach(item => {
        console.log(item)
        this.http.postFaabsAttendance(item).subscribe(data => console.log(data))
      }
      // }).forEach(item => alert(JSON.stringify(item))
    )
  this.notification.success('Attendance Marked', 'Attendance have been successfully marked!')
  }



}
