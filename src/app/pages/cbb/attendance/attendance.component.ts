import { Component, OnInit } from '@angular/core'
import { DataService } from '../../../services/data-service'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { Geolocation } from '@capacitor/geolocation'
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EsappRequestHandlerService } from 'src/app/esapp-request-handler.service';




@Component({
  selector: 'app-cbb-attendance',
  templateUrl: './attendance.component.html',
})
export class CbbAttendanceComponent implements OnInit {
    faabs : any[];
  faabsTopics : {};
  faabsTopicsEnrollments : Observable<any>;
  faabsTopicsEnrollmentsFiltered: any;
  faabsIDSelected: number;
  faabsAttendanceRegister: any[];
  faabsAttendanceRegisterFiltered: any[];

  isTopicsVisible: boolean = false;
  isAttendanceVisible: boolean = false;
  isPastAttendanceVisible: boolean = false;
  loading: boolean = true;
  selectedFaabs: {[key: string]: any}

  latitude: number;
  longintude: number;

  constructor(private http: DataService, private store: Store, private httpHandle: EsappRequestHandlerService,
    private notification: NzNotificationService) {}

  // This should be in the store
  setCurrentPosition = async () => {
    Geolocation.getCurrentPosition()
      .then(({coords}) => {
        this.longintude = coords.longitude;
        this.latitude = coords.latitude;
      });
   };

  ngOnInit() {
      this.http.getAllFaabs(12).subscribe((res: any[]) => {this.faabs = res});
      this.loading = false;
  }

  showTopicsModal (selectedFaabs){
    this.isTopicsVisible = true;
    this.selectedFaabs = selectedFaabs
  }

  showAttendanceModal (selectedFaabs){
    this.isAttendanceVisible = true;
    this.selectedFaabs = selectedFaabs
  }

  showPastAttendanceModal (selectedFaabs) {
    this.isPastAttendanceVisible = true
    this.selectedFaabs = selectedFaabs
  }

  handleCancel() {
    this.isTopicsVisible = false;
    this.isAttendanceVisible = false;
    this.isPastAttendanceVisible = false;
    this.selectedFaabs = {}
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
