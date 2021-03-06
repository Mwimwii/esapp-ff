/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EsappRequestHandlerService } from '../../../esapp-request-handler.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Geolocation } from '@capacitor/geolocation';

@Component({
    selector: 'app-farmer-registration-form',
    templateUrl: './farmer-registration-form.component.html',
    styleUrls: ['./farmer-registration-form.component.scss'],
})
export class AppFarmerRegistrationFormComponent implements OnInit {
// TODO: Set the number

    latitude: number
    longintude: number

    constructor(
        private http: EsappRequestHandlerService,
        private notification: NzNotificationService,
    ) {}

    setCurrentPosition = async () =>  {
        Geolocation.getCurrentPosition().then(({ coords }) => {
            this.longintude = coords.longitude;
            this.latitude =  coords.latitude;
        });
    }

    ngOnInit(): void {
        this.setCurrentPosition();
    }

    model = {}
    form = new FormGroup({})


    genericField = (kval, klabel, kplaceholder, required = this.required) => ({
        key: kval,
        type: "input",
        templateOptions: {
            type: "text",
            label: klabel,
            placeholder: kplaceholder,
            required: required,
        },
    })
    genericSectionLabel = (klabel, separator = false) => {
        let sep_tag = '';
        if (separator) {
            sep_tag = '<hr />';
        }
        return {
            className: 'section-label',
            template: `${sep_tag}<strong>${klabel}:</strong></div><br />`,
        };
    }
    required: boolean = true

    fields: FormlyFieldConfig[] = [
    // Group 1 Fields
        this.genericSectionLabel('Farmer Names'),
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    key: 'title',
                    type: 'select',
                    templateOptions: {
                        label: 'Title',
                        options: [
                            { value: 'Mr.', label: 'Mr' },
                            { value: 'Mrs.', label: 'Mrs' },
                            { value: 'Ms.', label: 'Ms' },
                            { value: 'Miss.', label: 'Miss' },
                            { value: 'Dr.', label: 'Dr' },
                            { value: 'Prof.', label: 'Prof' },
                        ],
                    },
                    className: 'col-1',
                },
                { className: 'col-3', ...this.genericField('first_name', 'First Name', 'Jonathan') },
                { className: 'col-3', ...this.genericField('other_names', 'Other Name', 'P', false) },
                { className: 'col-3', ...this.genericField('last_name', 'Last Name', 'Mwamba') },
            ],
        },
        this.genericSectionLabel('Farmer Identification', true),
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    key: 'sex',
                    type: 'select',
                    templateOptions: {
                        type: 'select',
                        label: 'Sex',
                        placeholder: 'Select Sex',
                        options: [
                            { value: 'Male', label: 'Male' },
                            { value: 'Female', label: 'Female' },
                        ],
                    },
                    className: 'col-4',
                },
                {
                    className: 'col-4',
                    key: 'dob',
                    type: 'input',
                    templateOptions: {
                        type: 'date',
                        label: 'Date of Birth',
                        required: this.required,
                    },
                },
                { className: 'col-4', ...this.genericField('nrc', 'NRC', '123435/10/1') },
            ],
        },
        this.genericSectionLabel('Household', true),
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    key: 'marital_status',
                    type: 'select',
                    templateOptions: {
                        type: 'text',
                        label: 'Marital Status',
                        placeholder: 'Select Marital Status',
                        options: [
                            { value: 'Single', label: 'Single' },
                            { value: 'Married', label: 'Married' },
                            { value: 'Divorced', label: 'Divorced' },
                            { value: 'Widowed', label: 'Widowed' },
                            { value: 'Separated', label: 'Separated' },
                            { value: 'Other', label: 'Other' },
                        ],
                    },
                    className: 'col-3',
                },
                {
                    key: 'relationship_to_household_head',
                    type: 'select',
                    className: 'col-3',
                    templateOptions: {
                        type: 'text',
                        label: 'Relationship to Household Head',
                        placeholder: 'Select Relationship to Household Head',
                        options: [
                            { value: 'Head of Household', label: 'Head of Household' },
                            { value: 'Spouse', label: 'Spouse' },
                            { value: 'Parent', label: 'Parent' },
                            { value: 'Sibling', label: 'Sibling' },
                            { value: 'Child', label: 'Child' },
                            { value: 'Other', label: 'Other' },
                        ],
                    },
                },
                {
                    className: 'col-3',
                    key: 'household_size',
                    type: 'input',
                    templateOptions: {
                        type: 'number',
                        label: 'Household Size',
                        placeholder: 'Enter Household Size',
                    },
                },
            ],
        },
        this.genericSectionLabel('Location and Village'),
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                { className: 'col-3', ...this.genericField('village', 'Village', 'Enter a Village') },
                { className: 'col-3', ...this.genericField('chiefdom', 'Chiefdom', 'Enter a Chiefdom') },
                { className: 'col-3', ...this.genericField('block', 'Block', 'Enter a Block') },
                { className: 'col-3', ...this.genericField('zone', 'Zone', 'Enter a Zone') },
            ],
        },
        this.genericField('commodity', 'Commodity', 'Enter a Commodity'),
        this.genericField('contact_number', 'Contact Number', '0977738827'),
    ]

    submit(model: any): void {
        this.model = {
            ...this.model,
            faabs_group_id: 1,
            registration_date: this.getDate(),
            age: this.calcAge(this?.model['dob']),
            status: 1,
            latitude: this.latitude.toString(),
            longintude: this.longintude.toString(),
            created_by: 1,
            updated_by: 1,
        };

        this.notification.success('Farmer Registered', 'Farmer successfully registered!');
        if (this.form.valid) {
            this.http.postDataAuthenticated('/category-a-farmers', this.model).subscribe(
                data => console.log,
                error => console.error,
            );
        }
    }

    // Todo: Move to a service util
    getDate() {
        const now = new Date();
        return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    }

    calcAge(dob: string): number {
        const dob_date = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - dob_date.getFullYear();
        const m = today.getMonth() - dob_date.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob_date.getDate())) {
            age--;
        }
        return age;
    }
}
