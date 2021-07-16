import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { SharedModule } from 'src/app/shared.module'
import { WidgetsComponentsModule } from 'src/app/@vb/widgets/widgets-components.module'
import { FooterComponent } from './Footer/footer.component'
import { AppTypography3Component } from './lmk/interviewguide/instructions-3/3.component'
import { AppControlsButton2Component } from './lmk/interviewguide/Button2-download/button-2.component'
import { AppTable2Component } from './lmk/interviewguide/tables-interview/2.component'
import { AppMyStoryTableComponent } from './lmk/myStories/stories-table/3.component'
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd'
import { FormlyModule } from '@ngx-formly/core'
import { CreateStoryFormComponent } from './lmk/mystories/create-story-form/create-story-form.component'
import { ChecklistStoryFormComponent } from './lmk/mystories/checklist-story-form/checklist-story-form.component'
import { FieldNgSelect } from './formly/quill/ng-select'
import { FieldQuillType } from './formly/quill/quil-type'
import { FormlySelectModule } from '@ngx-formly/core/select'
import { QuillModule } from 'ngx-quill'
import { FileValueAccessor } from './formly/file-accessor'
import { FormlyFieldFile } from './formly/file-component'
import { NgSelectModule } from '@ng-select/ng-select'
import { ViewStoryFormComponent } from './lmk/mystories/view-story-form/view-story-form.component'
import { AppMyStoriesTablesBootstrap4Component } from './lmk/myStories/my-Stories-table/4.component'
import { AppStoriesOfChangeTablesBootstrap4Component } from './lmk/storiesOfChange/soc-stories-detail-table/4.component'
import { AppStoriesOfChangeDataTableComponent } from './lmk/storiesOfChange/soc-stories-table/3.component'
import { ViewStoriesOfChangeFormComponent } from './lmk/storiesOfChange/view-stories-of-change-form/view-story-form.component'
import { StoriesOfChangeInstructionsComponent } from './lmk/storiesOfChange/soc-instructions/soc-instructions.component'
import { CbTopicsTableComponent } from './cbb/topics/cbb-topics-table/cbb-topics-table.component'
import { CbTopicsFormComponent } from './cbb/topics/cbb-topics-form/cbb-topics-form.component'
import { AppAttendanceMainTableComponent } from './cbb/attendance/attendance-main-table/3.component'
import { RegisterAttendantsFormComponent } from './cbb/attendance/register-attendance-form/view-story-form.component'
import { ViewPastRegistrationFormComponent } from './cbb/attendance/view-past-registration-form/view-past-registration-form.component'
import { PricesTableComponent } from './market/prices/prices-table/prices-table.component'
import { ViewPriceComponent } from './market/prices/prices-view-price/prices-view-price.component'
import { PricesFormComponent } from './market/prices/prices-form/prices-form.component'
import { HttpClientModule } from '@angular/common/http'

const COMPONENTS = [
  FooterComponent,
  AppMyStoryTableComponent,
  AppTable2Component,
  AppTypography3Component,
  AppControlsButton2Component,
  CreateStoryFormComponent,
  ChecklistStoryFormComponent,
  FieldNgSelect,
  FieldQuillType,
  FormlyFieldFile,
  AppMyStoriesTablesBootstrap4Component,
  AppStoriesOfChangeTablesBootstrap4Component,
  AppStoriesOfChangeDataTableComponent,
  ViewStoriesOfChangeFormComponent,
  StoriesOfChangeInstructionsComponent,
  CbTopicsTableComponent,
  CbTopicsFormComponent,
  ViewStoryFormComponent,
  PricesTableComponent,
  ViewPriceComponent,
  PricesFormComponent,
  FileValueAccessor,
  AppAttendanceMainTableComponent,
  RegisterAttendantsFormComponent,
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    QuillModule,
    HttpClientModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    WidgetsComponentsModule,
    FormlyNgZorroAntdModule,
    FormlyModule.forRoot({
      validationMessages: [{ name: 'required', message: 'This field is required' }],
    }),
    FormlySelectModule,
    NgSelectModule,
  ],
  declarations: [...COMPONENTS, ViewPastRegistrationFormComponent],
  exports: [...COMPONENTS],
})
export class MyComponentsModule {}
