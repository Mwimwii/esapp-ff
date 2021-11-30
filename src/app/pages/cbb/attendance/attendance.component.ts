import { Component, OnInit } from '@angular/core'
import { DataService } from '../../../services/data-service'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { filter, subscribeOn } from 'rxjs/operators'
import { of } from 'rxjs'
import { NzMessageService } from 'ng-zorro-antd/message';

interface FaabsTopic {
  id : number;
  faabs_id: number;
  training_type: string;
  topic_id: number;
}
interface FaabsAttendance {
  id: number,
  faabs_group_id: number,
  farmer_id: number,
  household_head_type: string,
  topic: number,
  facilitators: number,
  partner_organisations: string,
  training_date: string,
  duration: string,
  created_at: number,
  updated_at: number,
  created_by: number,
  updated_by: number,
  full_names: string,
  youth_non_youth: string,
  marital_status: string,
  sex: string,
  year_of_birth: number,
  quarter: number,
  topic_indicator: string,
  topic_subcomponent: string,
  training_type: string
}


@Component({
  selector: 'app-cbb-attendance',
  templateUrl: './attendance.component.html',
})
export class CbbAttendanceComponent implements OnInit {
  faabs : Observable<any>;
  faabsTopics : {};
  faabsTopicsEnrollments : Observable<any>;
  faabsTopicsEnrollmentsFiltered: any;
  faabsIDSelected: number;
  // faabsAttendanceRegister: Observable<any>;
  faabsAttendanceRegister: any[];
  faabsAttendanceRegisterFiltered: any[];

  isTopicsVisible: boolean = false;
  isAttendanceVisible: boolean = false;
  isPastAttendanceVisible: boolean = false;
  loading: boolean = true;

  constructor(private message: NzMessageService, private http: DataService, private store: Store) {}

  //Get the faabs groups
  // Get the faabs topics and set their id as the key of the object
  ngOnInit() {
      this.faabs = this.http.getFaabsGroups();
      this.http.getFaabsTopics()
                .subscribe((data:[]) => {
            this.faabsTopics = this.arrayToObj(data, 'id')
          })
      this.loading = false;
      this.http.getFaabsAttendanceRegister()
        // .subscribe((data: any[]) => this.faabsAttendanceRegister = this.arrayToObj(data.map((item: FaabsAttendance) => {return {...item, key: item.topic+item.created_at+item.faabs_group_id }}), 'id'));
        .subscribe((data: any[]) => this.faabsAttendanceRegister = data);
  }
  arrayToObj (data, key){
    return data.reduce((acc, curr) => (acc[curr[key]] = curr, acc), {})
}

  arrayToObjOfArrays (data, key){
    return data.reduce((acc, curr) => (acc[curr[key]] = curr, acc), [])
  }
  async getFaabsTopics(faabsID){
    this.http.getFaabsTopicsEnrollments()
      .subscribe( (data: any) => {
        this.faabsTopicsEnrollmentsFiltered = data.filter( topic => topic?.faabs_id==faabsID)
      } )
  }
  showTopicsModal (faabsID){
    this.isTopicsVisible = true;
    this.getFaabsTopics(faabsID);
  }
  showAttendanceModal (faabsID){
    this.isAttendanceVisible = true;
    this.faabsIDSelected = faabsID;
  }
  showPastAttendanceModal (faabsID){
    this.isPastAttendanceVisible = true;
    this.faabsIDSelected = faabsID;
    this.faabsAttendanceRegisterFiltered = this.faabsAttendanceRegister.filter((data: FaabsAttendance) => this.faabsIDSelected == data.faabs_group_id)
    // console.log(typeof(faabsID))
    // console.log(faabsID)
    // console.log(typeof(this.faabsAttendanceRegister[0].faabs_group_id))
    // console.log(this.faabsAttendanceRegister[0].faabs_group_id)
    console.log(this.faabsAttendanceRegister.map(data => {
      return ({ id: data.faabs_group_id })
    }))
    // console.log(this.faabsAttendanceRegisterFiltered)
    // this.faabsAttendanceRegisterFiltered = this.faabsAttendanceRegister[faabsID]
  }
  handleCancel(){
    this.isTopicsVisible = false;
    this.isAttendanceVisible = false;
    this.isPastAttendanceVisible = false;
  }
  handleTopicsOk(){
    this.isTopicsVisible = false;
  }
  handleAttendanceOk(){
    this.isAttendanceVisible = false
    this.faabsIDSelected = 0;
  }
  handlePastAttendanceOk(){
    this.isPastAttendanceVisible = false
    this.faabsIDSelected = 0;
  }
}
