import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import * as Reducers from 'src/app/store/reducers';
import * as UserActions from 'src/app/store/user/actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  } from 'src/app/components/models/farmer.interface';
import { FaabsAttendance } from 'src/app/components/models/faabs.models.interface';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    online = true
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }),
    }
    faabs: Observable<any>

    constructor(
        private http: HttpClient,
        private notification: NzNotificationService,
        private store: Store<any>,
    ) {}

    // utitlity functions
    get(url: string) {
        if (this.online) {
            return this.http.get(`/api/${url}`, this.httpOptions);
        } else {
            return of('offline');
        }
    }
    post(url: string, body) {
        if (this.online) {
            return this.http.post(`/api/${url}`, body, this.httpOptions);
        } else {
            return of('offline');
        }
    }

    // funtions to specific endpoints
    getCategoryAFarmers(){
        return this.get('category-a-farmers');
    }
    // getFaabsByUserId(user){
    //   return this.get('faabs-groups').pipe(
    //     filter( state => state.camp_id == user.camp)
    //   )
    // }

    // getFaabsGroups(){
    //     return this.store.pipe(select(Reducers.getUser))
    //       .pipe(
    //         switchMap(state => this.getFaabsByUserId(state.camp))
    //       )
    // }
    getFaabsGroups() {
        return this.get('faabs-groups');
    }

    getFaabsTopics() {
        return this.get('faabs-topics');
    }
    // Get the association table for faabs groups and topics
    getFaabsTopicsEnrollments() {
        return this.get('faabs-topics-enrollments');
    }

    getFaabsAttendanceRegister() {
        return this.get('faabs-attendance-registers');
    }

    getError() {
        return this.get('error');
    }

    postFaabsAttendance(item) {
        console.log('Posting Item');
        console.log(item);
        return this.post('faabs-attendance-registers', item);
    }

    // app specific functions

    // GET /api/faabs-groups for a specific camp officer
    // get get the camp office from the store
    getFaabsCollection(camp_id: number) {
        // get the faabs groups for the camp id
        // and with the id get the farmers and filter by faabs group id
    //     const FaabsGroups = this.getFaabsGroups().pipe(
    //         // filter faabs groups by camp id
    //         filter(state => state.camp_id == camp_id),
    //         // get farmers for each faabs group
    //         switchMap(state => {
    //             const faabs_ids = state.faabs_ids;
    //             const farmers = this.getCategoryAFarmers().pipe(
    //                 // filter farmers by faabs group id
    //                 filter(farmer => faabs_ids.includes(farmer.faabs_group_id)),

    return '';
    }


}
