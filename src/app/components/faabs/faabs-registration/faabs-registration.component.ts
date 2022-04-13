import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { genericField, genericSectionLabel, } from 'src/app/utils';
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { Geolocation } from '@capacitor/geolocation'
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EsappRequestHandlerService } from 'src/app/esapp-request-handler.service';
import { DataService } from 'src/app/services/data-service';


@Component({
  selector: 'app-faabs-registration',
  template: `
  <div>
  <nz-spin [nzSpinning]="isSpinning" [nzDelay]="500" nzTip="Loading...">
  <form [formGroup]="form" (ngSubmit)="submit()" nz-form [nzLayout]="'vertical'">
    <formly-form [form]="form" [fields]="fields" [model]="model">
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="reset" class="btn btn-warning ml-2">Reset</button>
    </formly-form>
  </form>
  </nz-spin>
</div>

  `,
})
export class FaabsRegistrationComponent implements OnInit {
  form = new FormGroup({})
  isSpinning: boolean = true;
  model = {}
  fields: FormlyFieldConfig[] = [
    genericSectionLabel('Create a new Faabs Group'),
    {
      templateOptions: { label: 'Faabs Details' },
      fieldGroupClassName: 'row',
      fieldGroup: [
        { className: 'col-6', ...genericField('name', 'Faabs Name', 'Faabs Chongwe') },
        { className: 'col-6', ...genericField('description', 'Description', '', false) },
      ],
    },
    {
      templateOptions: { label: 'Faabs Topics' },
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'topics',
          type: 'select',
          templateOptions: {
            label: 'Topics',
            placeholder: 'Select Topic',
            options: this.http.getAllFaabsTopics(),
            valueProp: 'id',
            labelProp: 'subComponent',
          },
          className: 'col-6',
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-3',
          key: 'maxAttendedTopics',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Maximum Attended Topics',
            placeholder: 'eg. 2',
          },
        },
      ],
    },
  ]

  latitude: number;
  longintude: number;
 // This should be in the store
 setCurrentPosition = async () => {
  Geolocation.getCurrentPosition()
    .then(({coords}) => {
      this.longintude = coords.longitude;
      this.latitude = coords.latitude;
    });
 };

  constructor(private http: DataService, private store: Store, private httpHandle: EsappRequestHandlerService,
    private notification: NzNotificationService) {}


  ngOnInit() {
    this.setCurrentPosition()
    this.isSpinning = false;
  }

  submit(): void {
    this.isSpinning = true;
    //  get the camp_id from the user reducer
    this.model['campId'] = "12"
    this.model['latitude'] = this.latitude
    this.model['longitude'] = this.longintude
    console.log(this.model)
    if(this.form.valid){
      setTimeout(() => {
      this.httpHandle.postDataAuthenticated('/faabs/submit', this.model)
      .subscribe(data => {this.notification.success('Faabs Registered', 'Faabs successfully registered!'); this.isSpinning = false;this.model={}},
                 error => {this.notification.error('Error', JSON.stringify(error)); this.isSpinning = false;});
      }, 1000);
    }
  }



}
