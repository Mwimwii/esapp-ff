import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { EsappRequestHandlerService } from '../../../esapp-request-handler.service'
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { Geolocation } from '@capacitor/geolocation'

@Component({
  selector: 'app-farmer-registration-form',
  templateUrl: './farmer-registration-form.component.html',
  styleUrls: ['./farmer-registration-form.component.scss'],
})
export class AppFarmerRegistrationFormComponent implements OnInit {
  latitude: number;
  longintude: number;

  constructor(
              private http: EsappRequestHandlerService,
              private notification: NzNotificationService) {}

// This should be in the store
  setCurrentPosition = async () => {
   Geolocation.getCurrentPosition()
     .then(({coords}) => {
       this.longintude = coords.longitude;
       this.latitude = coords.latitude;
     });
  };

    ngOnInit(): void {
        this.setCurrentPosition()
  }

  form = new FormGroup({})
  model = {}
  genericField = (kval, klabel, kplaceholder, required = this.required) => {
    return {
      key: kval,
      type: 'input',
      templateOptions: {
        type: 'text',
        label: klabel,
        placeholder: kplaceholder,
        required: required,
      },
    }
  }
  genericSectionLabel = (klabel, separator=false) => {
    let sep_tag = ''
    if (separator) {
      sep_tag = '<hr />'
    }
    return {
        className: 'section-label',
        template: `${sep_tag}<strong>${klabel}:</strong></div><br />`,
    }
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
          className: 'col-1'
        },
        { className: 'col-3', ...this.genericField('firstName', 'First Name', 'Jonathan') },
        { className: 'col-3', ...this.genericField('otherNames', 'Other Name', 'P', false) },
        { className: 'col-3', ...this.genericField('lastName', 'Last Name', 'Mwamba') },
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
          key: 'maritalStatus',
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
          key: 'relationshipToHouseholdHead',
          type: 'select',
          className:'col-3',
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
        { className:'col-3',
          key: 'householdHeadType',
        type: 'select',
        templateOptions: {
          type: 'text',
          label: 'Household Head Type',
          placeholder: 'Select Household Head Type',
          options: [
            { value: 'Male headed', label: 'Male Headed' },
            { value: 'Female headed', label: 'Female Headed' },
          ],
        },},
        {
          className: 'col-3',
          key: 'householdSize',
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
    this.genericField('contactNumber', 'Contact Number', '0977738827'),
  ]

  submit(): void {
    this.model['latitude'] = this.latitude
    this.model['longitude'] = this.longintude
    let now = new Date()
    this.model['registration_date'] = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()


    if(this.form.valid){
      this.http.postDataAuthenticated('/farmers/submit', this.model)
      .subscribe(data => this.notification.success('Farmer Registered', 'Farmer successfully registered!'),
                 error => this.notification.error('Error', error))
    }
  }

  calcAge(dob: string): number {
    const dob_date = new Date(dob)
    const today = new Date()
    let age = today.getFullYear() - dob_date.getFullYear()
    const m = today.getMonth() - dob_date.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < dob_date.getDate())) {
      age--
    }
    return age
  }
}
