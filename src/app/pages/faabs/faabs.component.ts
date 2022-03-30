import { Component, OnInit } from '@angular/core'
import { DataService } from '../../services/data-service'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { NzMessageService } from 'ng-zorro-antd/message'
import { FaabsAttendance } from 'src/app/components/models/faabs.models.interface';
@Component({
    selector: 'app-faabs',
    templateUrl: './faabs.component.html',
})
export class FaabsComponent implements OnInit {
    faabs: Observable<any>
    faabsTopics: {}
    faabsTopicsEnrollments: Observable<any>
    faabsTopicsEnrollmentsFiltered: any
    faabsIDSelected: number
    // faabsAttendanceRegister: Observable<any>;
    faabsAttendanceRegister: any[]
    faabsAttendanceRegisterFiltered: any[]

    isTopicsVisible: boolean = false
    isAttendanceVisible: boolean = false
    isPastAttendanceVisible: boolean = false
    loading: boolean = true

    constructor(private message: NzMessageService, private http: DataService, private store: Store) {}

    //Get the faabs groups
    // Get the faabs topics and set their id as the key of the object
    ngOnInit() {
        this.faabs = this.http.getFaabsGroups()
        this.http.getFaabsTopics().subscribe((data: []) => {
            this.faabsTopics = this.arrayToObj(data, 'id')
        })
        this.loading = false
        this.http
            .getFaabsAttendanceRegister()
        // .subscribe((data: any[]) => this.faabsAttendanceRegister = this.arrayToObj(data.map((item: FaabsAttendance) => {return {...item, key: item.topic+item.created_at+item.faabs_group_id }}), 'id'));
            .subscribe((data: any[]) => (this.faabsAttendanceRegister = data))
    }
    arrayToObj(data, key) {
        return data.reduce((acc, curr) => ((acc[curr[key]] = curr), acc), {})
    }

    arrayToObjOfArrays(data, key) {
        return data.reduce((acc, curr) => ((acc[curr[key]] = curr), acc), [])
    }
    async getFaabsTopics(faabsID) {
        this.http.getFaabsTopicsEnrollments().subscribe((data: any) => {
            this.faabsTopicsEnrollmentsFiltered = data.filter(topic => topic?.faabs_id === faabsID)
        })
    }
    showTopicsModal(faabsID) {
        this.isTopicsVisible = true
        this.getFaabsTopics(faabsID)
    }
    showAttendanceModal(faabsID) {
        this.isAttendanceVisible = true
        this.faabsIDSelected = faabsID
    }
    showPastAttendanceModal(faabsID) {
        this.isPastAttendanceVisible = true
        this.faabsIDSelected = faabsID
        this.faabsAttendanceRegisterFiltered = this.faabsAttendanceRegister.filter(
            (data: FaabsAttendance) => this.faabsIDSelected === data.faabs_group_id,
        )

        console.log(
            this.faabsAttendanceRegister.map(data => {
                return { id: data.faabs_group_id }
            }),
        )
    }
    handleCancel() {
        this.isTopicsVisible = false
        this.isAttendanceVisible = false
        this.isPastAttendanceVisible = false
    }
    handleTopicsOk() {
        this.isTopicsVisible = false
    }
    handleAttendanceOk() {
        this.isAttendanceVisible = false
        this.faabsIDSelected = 0
    }
    handlePastAttendanceOk() {
        this.isPastAttendanceVisible = false
        this.faabsIDSelected = 0
    }
}
