import { Component, Input } from '@angular/core'
import { FieldType } from '@ngx-formly/core'

@Component({
  selector: 'formly-field-custom-ngselect',
  template: `
    <ng-select
      multiple="true"
      [bindValue]="'value'"
      [items]="to.options | formlySelectOptions: field | async"
      [formControl]="formControl"
    >
    </ng-select>
  `,
  styleUrls: ['./ng-select.scss'],
})
export class FieldNgSelect extends FieldType {
  // @Input('categories')categories=[];
  selectedCategory: any
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
