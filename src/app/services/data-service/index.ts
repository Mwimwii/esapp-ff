import { Injectable } from '@angular/core'
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { select, Store } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { switchMap, filter, map } from 'rxjs/operators'
import * as Reducers from 'src/app/store/reducers'
import * as UserActions from 'src/app/store/user/actions'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  online=true;
  httpOptions = {
                headers: new HttpHeaders({
             'Content-Type':  'application/json',
             'Accept':  'application/json',
         })}
  faabs: Observable<any>

  constructor(
    private http: HttpClient,
    private notification: NzNotificationService,
    private store: Store<any>,
  ) {
  }

  getAllFarmers(){
      return this.get('farmers')
  }

  getFarmers(faabsId){
      return this.get('farmers')
  }

  getAllFaabs(campId){
      return this.get(`faabs/${campId}`)
  }

  getAllFaabsTopics(): Observable<any[]>{
    return this.get(`faabs/topics/all`) as Observable<any[]>
  }

  getFaabsAttendance(faabsId){
    return this.get(`faabs/${faabsId}/attendance`)
  }

  getError(){
    return this.get('error')
  }

  get(url: string){
    if(this.online){
      return this.http.get(`/api/${url}`, this.httpOptions)
    } else { return of("offline")}
  }
ffix
  postFaabsAttendance(item){
    console.log(`Posting Item `)
    console.log(item)
    return this.post("faabs-attendance-registers", item)
  }

  post(url: string, body){
    if(this.online){
      return this.http.post(`/api/${url}`,body,  this.httpOptions)
    } else { return of("offline")}
  }

}
