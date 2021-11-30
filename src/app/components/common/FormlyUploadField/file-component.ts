import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { FieldType } from '@ngx-formly/core'

@Component({
  selector: 'formly-field-file',
  template: `
    <div class="upload-wrapper">
      <div class="file-container">
        <div class="file" *ngFor="let file of selectedFiles; let i = index">
          <img [src]="getSanitizedImageUrl(file)" />
          <span (click)="onDelete(i)">X</span>
        </div>
      </div>
      <div class="upload-container" (click)="openFileInput()">
        <div class="mask"></div>
        <div class="helper-text">
          <div class="absolute-div">
            <div>
              Upload image(s)
            </div>
          </div>
        </div>
        <input
          #fileinput
          [multiple]="to.multiple"
          id="file-input"
          type="file"
          [formControl]="formControl"
          [formlyAttributes]="field"
          (change)="onChange($event)"
          accept=".png,.jpg"
          style="display: none"
        />
      </div>
    </div>
  `,
  styleUrls: ['./file-type.component.scss'],
})
export class FormlyFieldFile extends FieldType implements OnInit {
  @ViewChild('fileinput') el: ElementRef
  selectedFiles: File[]
  constructor(public sanitizer: DomSanitizer) {
    super()
  }
  ngOnInit(): void {
    //get product
  }
  openFileInput() {
    this.el.nativeElement.click()
  }
  onDelete(index) {
    // this.formControl.reset();
    console.log(this.selectedFiles)
    this.selectedFiles.splice(index, 1)

    this.formControl.patchValue(this.selectedFiles)
    // console.log("Form Control Value", this.formControl.value);
  }
  onChange(event) {
    this.selectedFiles = Array.from(event.target.files)
    if (this.selectedFiles.length > 10) {
      this.selectedFiles.length = 10
    }

    // console.log(this.selectedFiles);
  }
  getSanitizedImageUrl(file: File) {
    return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
  }
  isImage(file: File): boolean {
    return /^image\//.test(file.type)
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
