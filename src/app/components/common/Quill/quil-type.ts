import { Component } from '@angular/core'
import { FieldType } from '@ngx-formly/core'

@Component({
  selector: 'formly-field-custom-input',
  template: `
    <quill-editor
      [modules]="QuillConfiguration"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </quill-editor>
  `,
})
export class FieldQuillType extends FieldType {
  QuillConfiguration = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
