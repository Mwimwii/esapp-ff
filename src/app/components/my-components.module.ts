import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { SharedModule } from 'src/app/shared.module'
import { WidgetsComponentsModule } from 'src/app/@vb/widgets/widgets-components.module'
import { FooterComponent } from './common/Footer/footer.component'
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd'
import { FormlyModule } from '@ngx-formly/core'
import { FieldNgSelect } from './common/Quill/ng-select'
import { FieldQuillType } from './common/Quill/quil-type'
import { FormlySelectModule } from '@ngx-formly/core/select'
import { HttpClientModule } from '@angular/common/http'
import { QuillModule } from 'ngx-quill'
import { FileValueAccessor } from './common/FormlyUploadField/file-accessor'
import { FormlyFieldFile } from './common/FormlyUploadField/file-component'
import { NgSelectModule } from '@ng-select/ng-select'

import { PricesTableComponent } from './market/prices/prices-table/prices-table.component'
import { ViewPriceComponent } from './market/prices/prices-view-price/prices-view-price.component'
import { PricesFormComponent } from './market/prices/prices-form/prices-form.component'

import { AppAttendanceMainTableComponent } from './cbb/attendance/attendance-main-table/3.component'
import { FaabsAttendanceSheetComponent } from './cbb/attendance/register-attendance-form/faabs-attendance-sheet.component'
import { ViewPastRegistrationFormComponent } from './cbb/attendance/attendance-main-table/view-past-registration-form/view-past-registration-form.component'

import { CbTopicsDetailComponent } from './cbb/topics/cbb-topics-detail/cbb-topics-detail.component'
import { CbTopicsTabsComponent } from './cbb/topics/cbb-topics-tabs/cbb-topics-tabs.component'
import { CbTopicsFormComponent } from './cbb/topics/cbb-topics-form/cbb-topics-form.component'

import { DashboardDownloadListComponent } from './dashboard/dashboard-download-list/dashboard-download-list.component'
import { DashboardTasksTableComponent } from './dashboard/dashboard-tasks-table/dashboard-tasks-table.component'
import { DashboardHeadComponent } from './dashboard/dashboard-head/dashboard-head.component'
import { DashboardHeadItemComponent } from './dashboard/dashboard-head-item/dashboard-head-item.component'
import { CbTopicsTableComponent } from './cbb/topics/cbb-topics-table/cbb-topics-table.component'

import { AppFarmerTableDetailComponent } from './farmer-registration/farmer-table/farmer-table-detail/farmer-table-detail.component'
import { AppFarmerTableComponent } from './farmer-registration/farmer-table/farmer-table.component'
import { AppFarmerRegistrationFormComponent } from './farmer-registration/farmer-registration-form/farmer-registration-form.component'
import { MapComponent } from './map/map.component'
import { FaabsTabComponent } from './cbb/faabs-tab/faabs-tab.component'
import { FaabsAttendanceModalComponent } from './cbb/faabs-attendance-modal/faabs-attendance-modal.component'

const COMPONENTS = [
  //Common
  FooterComponent,
  FieldNgSelect,
  FieldQuillType,
  FormlyFieldFile,
  FileValueAccessor,

  // Faabs Management Components
  CbTopicsDetailComponent,
  CbTopicsTabsComponent,
  CbTopicsFormComponent,

  //Market Management
  PricesTableComponent,
  ViewPriceComponent,
  PricesFormComponent,

  AppAttendanceMainTableComponent,
  FaabsAttendanceSheetComponent,

  DashboardDownloadListComponent,
  DashboardTasksTableComponent,
  DashboardHeadComponent,
  DashboardHeadItemComponent,

  CbTopicsTableComponent,

  MapComponent,


  AppFarmerTableComponent,
  AppFarmerTableDetailComponent,
  AppFarmerRegistrationFormComponent,
  FaabsTabComponent,
  FaabsAttendanceModalComponent

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
