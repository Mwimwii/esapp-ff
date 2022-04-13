import { Component } from '@angular/core'
import {  FormGroup } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as UserActions from 'src/app/store/user/actions'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { EsappRequestHandlerService } from '../../../esapp-request-handler.service'
import { genericField, genericSectionLabel } from 'src/app/utils'
import { DataService } from 'src/app/services/data-service'

@Component({
  selector: 'vb-system-register-page',
  templateUrl: './register.component.html',
})
export class RegisterPage {
  loading: boolean = false

  constructor(private dataService: DataService, private http: EsappRequestHandlerService, private store: Store<any>) {
    this.store.pipe(select(Reducers.getUser)).subscribe(state => {
      this.loading = state.loading
    })
  }

  form = new FormGroup({})
  model= {}
  fields: FormlyFieldConfig[] = [
    // Group 1 Fields
    genericSectionLabel('Farmer Names'),
    {
      fieldGroup: [
        { className: '', ...genericField('email', 'Email', 'Jonathan') },
        { className: '', ...genericField('firstName', 'First Name', 'James') },
        { className: '', ...genericField('lastName', 'Last Name', 'Mwamba') },
        { className:'',
          key: 'camp',
        type: 'select',
        templateOptions: {
          type: 'text',
          label: 'Camp',
          placeholder: 'Camp',
          options: [],
        },}
      ],
    },
  ]
  submitForm(): void {

    this.store.dispatch(new UserActions.Register(this.model))
  }
}
