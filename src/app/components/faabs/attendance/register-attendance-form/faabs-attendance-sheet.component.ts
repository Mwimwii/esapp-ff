import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../services/data-service';
import { FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';
import { filter} from 'rxjs/operators';
import { Farmer } from 'src/app/components/models/farmer.interface';
import { FaabsAttendance } from 'src/app/components/models/faabs.models.interface';


export interface FaabsGroup {
    camp_id: 10
    code: number |null
    created_at: number
    created_by: number
    id: number
    latitude: string | null
    longitude: string | null
    max_farmer_graduation_training_topics: number
    name: string
    status: number
    updated_at: number
    updated_by: number
}

@Component({
    selector: 'app-register-attendants-form',
    templateUrl: './faabs-attendance-sheet.component.html',
    styleUrls: ['./faabs-attendance-sheet.component.scss'],
})
export class FaabsAttendanceSheetComponent implements OnInit {
    @Input() faabsGroupId: number
    loading = false
    data = []
    // Table variables
    listOfAllData: any[] = []
    isAllDisplayDataChecked = false
    isOperating = false
    isIndeterminate = false
    mapOfCheckedId: { [key: string]: boolean } = {}
    numberOfChecked = 0
    listOfDisplayData: any[] = []
    
    // Form variables
    farmerAttendance: {} = {}
    faabs: Observable<any>
    faabsTopics: {}
    faabsTopicsEnrollments: Observable<any>
    faabsFacilitators = 'ESAPP'
    faabsPartnerOrg = 'IFADD'

    faabsGroup: any

    campOfficerID = 10
    // FormlyUploadField forms
    form = new FormGroup({})
    model = {}
    topics
    fields = [
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
        this.listOfDisplayData = $event;
        this.refreshStatus();
    }

    refreshStatus(): void {
        this.isAllDisplayDataChecked = this.listOfDisplayData
            .filter(item => !item.disabled)
            .every(item => this.mapOfCheckedId[item.id]);
        this.isIndeterminate =
      this.listOfDisplayData
          .filter(item => !item.disabled)
          .some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfAllData.filter(item => this.mapOfCheckedId[item.id]).length;
    }
    constructor(private http: DataService, private notification: NzNotificationService) {}

    ngOnInit(): void {
        console.log('Faabs Group Id OnInit: ', this.faabsGroupId);

        this.http.getFaabsTopics().subscribe((data: []) => {
            this.topics = data;
        });

        // Get the FaaBs Group ID
        this.http.getFaabsGroups().subscribe((data: FaabsGroup[]) => {
            this.faabsGroup = data.filter(item => item.id === this.faabsGroupId)[0];
            // why does this become undefined
            console.log('Faabs Group Id: ', this.faabsGroupId);
        });

        this.http.getFaabsAttendanceRegister().subscribe((data: FaabsAttendance[]) => {
            const attendance = data.filter((item) => item.faabs_group_id === 5);
            this.farmerAttendance = this.arrayToObj(attendance, 'farmer_id');
        });

        this.http.getCategoryAFarmers()
            .pipe(
                filter((farmer: any) => farmer.faabs_group_id === this.faabsGroupId),
                // filter((farmer: any) => farmer.),
            ).subscribe(data => (this.listOfAllData = data));
    }
    // perform a count by farmer id

    arrayToObj<T>(data: any[], key: T): {} {
        return data.reduce((acc, curr) => {
            return acc[curr[key]] ? ++acc[curr[key]] : acc[curr[key]] = 1, acc;
        }, {})
    }

    checkAll(value: boolean): void {
        this.listOfDisplayData
            .filter(item => !item.disabled)
            .forEach(item => (this.mapOfCheckedId[item.id] = value));
        this.refreshStatus();
    }

    operateData(): void {
        this.isOperating = true;
        setTimeout(() => {
            this.listOfAllData.forEach(item => (this.mapOfCheckedId[item.id] = false));
            this.refreshStatus();
            this.isOperating = false;
        }, 1000);
    }

    submit(model: any) {
        // Ensure that the type safety is maintained
        this.listOfAllData
            .filter(farmer => this.mapOfCheckedId[farmer.id])
            .map(farmer => ({
                faabs_group_id: this.faabsGroupId,
                facilitators: this.faabsFacilitators,
                partner_organisations: this.faabsPartnerOrg,
                training_date: new Date(),
                duration: '2:30',
                quarter: '2',
                created_by: this.campOfficerID,
                updated_by: this.campOfficerID,

                topic: this.topics[0].topic,
                topic_indicator: this.topics[0].output_level_indicator,
                topic_subcomponent: this.topics[0].subcomponent,
                training_type: 'Participants under non-Direct/Other Training [Stream 2]',

                farmer_id: farmer.id,
                full_names: farmer.first_name + ' ' + farmer.other_names + farmer.last_name,
                youth_non_youth: 'Non Youth',
                marital_status: farmer['marital_status'],
                sex: farmer['sex'],
                year_of_birth: '1992',
            }))
            .map(item => this.http.postFaabsAttendance(item))
            .forEach(
                (postData: Observable<any>) => {
                    console.log(postData);
                    postData.subscribe(data => console.log(data));
                },
                // }).forEach(item => alert(JSON.stringify(item))
            );
        this.notification.success('Attendance Marked', 'Attendance have been successfully marked!');
    }
}
