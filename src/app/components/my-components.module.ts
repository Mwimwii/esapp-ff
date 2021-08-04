import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { SharedModule } from 'src/app/shared.module'
import { WidgetsComponentsModule } from 'src/app/@vb/widgets/widgets-components.module'
import { FooterComponent } from './Footer/footer.component'
import { AppTypography3Component } from './lmk/interviewguide/instructions-3/3.component'
import { InterviewGuideDownloadBtnComponent } from './lmk/interviewguide/interview-guide-download-btn/interview-guide-download-btn.component'
import { InterviewGuideTableComponent } from './lmk/interviewguide/interview-guide-table/interview-guide-table.component'
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
import { AppSocTableDetailComponent } from './lmk/myStories/soc-table-detail/soc-table-detail.component'
import { AppStoriesOfChangeTablesBootstrap4Component } from './lmk/storiesOfChange/soc-stories-detail-table/soc-stories-detail-table.component'
import { AppStoriesOfChangeTableComponent } from './lmk/storiesOfChange/soc-stories-table/soc-stories-table.component'
import { ViewStoriesOfChangeFormComponent } from './lmk/storiesOfChange/view-stories-of-change-form/view-story-form.component'
import { StoriesOfChangeInstructionsComponent } from './lmk/storiesOfChange/soc-instructions/soc-instructions.component'
import { CbTopicsTabsComponent } from './cbb/topics/cbb-topics-tabs/cbb-topics-tabs.component'
import { CbTopicsFormComponent } from './cbb/topics/cbb-topics-form/cbb-topics-form.component'
import { AppAttendanceMainTableComponent } from './cbb/attendance/attendance-main-table/3.component'
import { RegisterAttendantsFormComponent } from './cbb/attendance/register-attendance-form/view-story-form.component'
import { ViewPastRegistrationFormComponent } from './cbb/attendance/view-past-registration-form/view-past-registration-form.component'
import { PricesTableComponent } from './market/prices/prices-table/prices-table.component'
import { ViewPriceComponent } from './market/prices/prices-view-price/prices-view-price.component'
import { PricesFormComponent } from './market/prices/prices-form/prices-form.component'
import { HttpClientModule } from '@angular/common/http'
import { CbTopicsDetailComponent } from './cbb/topics/cbb-topics-detail/cbb-topics-detail.component'
import { MGFTableComponent } from './mgf/mgf-table/mgf-table.component'
import { MGFItemDetailComponent } from './mgf/mgf-item-detail/mgf-item-detail.component'
import { MGFFormComponent } from './mgf/mgf-form/mgf-form.component'
import { DashboardDownloadListComponent } from './dashboard/dashboard-download-list/dashboard-download-list.component'
import { DashboardTasksTableComponent } from './dashboard/dashboard-tasks-table/dashboard-tasks-table.component'
import { DashboardHeadComponent } from './dashboard/dashboard-head/dashboard-head.component'
import { DashboardHeadItemComponent } from './dashboard/dashboard-head-item/dashboard-head-item.component'
import { SocCreateStoryFormComponent } from './lmk/myStories/soc-create-story-form/soc-create-story-form.component'
import { CbTopicsTableComponent } from './cbb/topics/cbb-topics-table/cbb-topics-table.component'
import { AppFarmerTableDetailComponent } from './farmer-registration/farmer-table/farmer-table-detail/farmer-table-detail.component'
import { AppFarmerTableComponent } from './farmer-registration/farmer-table/farmer-table.component'
import { AppFarmerRegistrationFormComponent } from './farmer-registration/farmer-registration-form/farmer-registration-form.component'

const COMPONENTS = [
  FooterComponent,
  AppMyStoryTableComponent,
  InterviewGuideTableComponent,
  AppTypography3Component,
  InterviewGuideDownloadBtnComponent,
  CreateStoryFormComponent,
  ChecklistStoryFormComponent,
  FieldNgSelect,
  FieldQuillType,
  FormlyFieldFile,
  AppSocTableDetailComponent,
  AppStoriesOfChangeTablesBootstrap4Component,
  AppStoriesOfChangeTableComponent,
  ViewStoriesOfChangeFormComponent,
  StoriesOfChangeInstructionsComponent,
  CbTopicsTabsComponent,
  CbTopicsFormComponent,
  CbTopicsDetailComponent,
  PricesTableComponent,
  ViewPriceComponent,
  PricesFormComponent,
  FileValueAccessor,
  AppAttendanceMainTableComponent,
  RegisterAttendantsFormComponent,
  MGFTableComponent,
  MGFItemDetailComponent,
  MGFFormComponent,
  DashboardDownloadListComponent,
  DashboardTasksTableComponent,
  DashboardHeadComponent,
  DashboardHeadItemComponent,
  SocCreateStoryFormComponent,
  CbTopicsTableComponent,

  /** Farmers Specific
      Todo
        - Let the forms inherit one component
        - Let the form load the fields when the program launches
  **/
  AppFarmerTableComponent,
  AppFarmerTableDetailComponent,
  AppFarmerRegistrationFormComponent


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
  declarations: [...COMPONENTS, ViewPastRegistrationFormComponent, DashboardHeadComponent],
  exports: [...COMPONENTS, DashboardHeadComponent],
})
export class MyComponentsModule {}
