import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { LayoutsModule } from 'src/app/layouts/layouts.module'
import { AppPreloader } from 'src/app/app-routing-loader'
import { AuthGuard } from 'src/app/@vb/components/Guard/auth.guard'
import { WidgetsComponentsModule } from 'src/app/@vb/widgets/widgets-components.module'

// layouts & notfound
import { LayoutAuthComponent } from 'src/app/layouts/Auth/auth.component'
import { LayoutMainComponent } from 'src/app/layouts/Main/main.component'

// pages
// VB:REPLACE-START:ROUTER-IMPORTS
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { LkmComponent } from './pages/lkm/lkm.component'
import { LkmInterviewsComponent } from './pages/lkm/interviews/interviews.component'
import { LkmMystoriesComponent } from './pages/lkm/mystories/mystories.component'
import { LkmSocComponent } from './pages/lkm/soc/soc.component'
import { MgfComponent } from './pages/mgf/mgf.component'
import { MgfOrgComponent } from './pages/mgf/org/org.component'
import { MgfEvaluationsComponent } from './pages/mgf/evaluations/evaluations.component'
import { MgfProposalsComponent } from './pages/mgf/proposals/proposals.component'
import { MgfApplicationsComponent } from './pages/mgf/applications/applications.component'
import { MgfApplicantsComponent } from './pages/mgf/applicants/applicants.component'
import { MgfApprovalsComponent } from './pages/mgf/approvals/approvals.component'
import { MgfConceptNotesComponent } from './pages/mgf/concept-notes/concept-notes.component'
import { MeComponent } from './pages/me/me.component'
import { MeSchedulesComponent } from './pages/me/schedules/schedules.component'
import { CbbComponent } from './pages/cbb/cbb.component'
import { CbbTopicsComponent } from './pages/cbb/topics/topics.component'
import { CbbAttendanceComponent } from './pages/cbb/attendance/attendance.component'
import { CbbSchedulesComponent } from './pages/cbb/schedules/schedules.component'
import { MarketComponent } from './pages/market/market.component'
import { PricesComponent } from './pages/prices/prices.component'
import { ReportsComponent } from './pages/reports/reports.component'
import { CumulativeComponent } from './pages/cumulative/cumulative.component'
import { UserComponent } from './pages/user/user.component'
import { UserProfileComponent } from './pages/user/profile/profile.component'
import { MyComponentsModule } from './components/my-components.module'

// VB:REPLACE-END:ROUTER-IMPORTS

const routes: Routes = [
  {
    path: '',
    // VB:REPLACE-NEXT-LINE:ROUTER-REDIRECT
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutMainComponent,
    canActivate: [AuthGuard],
    children: [
      // VB:REPLACE-START:ROUTER-CONFIG
      {
        path: 'dashboard',
        data: { title: 'Dashboards' },
        component: DashboardComponent,
      },
      {
        path: 'lkm',
        data: { title: 'L&K Management' },
        component: LkmComponent,
      },
      {
        path: 'lkm/interviews',
        data: { title: 'Interview Guide' },
        component: LkmInterviewsComponent,
      },
      {
        path: 'lkm/mystories',
        data: { title: 'My Stories' },
        component: LkmMystoriesComponent,
      },
      {
        path: 'lkm/soc',
        data: { title: 'Stories of Change' },
        component: LkmSocComponent,
      },
      {
        path: 'mgf',
        data: { title: 'Matching Grant Facility' },
        component: MgfComponent,
      },
      {
        path: 'mgf/org',
        data: { title: 'Organizations' },
        component: MgfOrgComponent,
      },
      {
        path: 'mgf/evaluations',
        data: { title: 'Evaluations' },
        component: MgfEvaluationsComponent,
      },
      {
        path: 'mgf/proposals',
        data: { title: 'Proposals' },
        component: MgfProposalsComponent,
      },
      {
        path: 'mgf/applications',
        data: { title: 'Applications' },
        component: MgfApplicationsComponent,
      },
      {
        path: 'mgf/applicants',
        data: { title: 'Applicants' },
        component: MgfApplicantsComponent,
      },
      {
        path: 'mgf/approvals',
        data: { title: 'Approvals' },
        component: MgfApprovalsComponent,
      },
      {
        path: 'mgf/concept-notes',
        data: { title: 'Concept Notes' },
        component: MgfConceptNotesComponent,
      },
      {
        path: 'me',
        data: { title: 'Monitoring and Evaluation' },
        component: MeComponent,
      },
      {
        path: 'me/schedules',
        data: { title: 'Camp Monthly Schedules' },
        component: MeSchedulesComponent,
      },
      {
        path: 'cbb',
        data: { title: 'Capacity Building' },
        component: CbbComponent,
      },
      {
        path: 'cbb/topics',
        data: { title: 'FaaBS Training topics' },
        component: CbbTopicsComponent,
      },
      {
        path: 'cbb/attendance',
        data: { title: 'FaaBS Training Attendance' },
        component: CbbAttendanceComponent,
      },
      {
        path: 'market',
        data: { title: 'Market Data' },
        component: MarketComponent,
      },
      {
        path: 'prices',
        data: { title: 'Commodity Prices' },
        component: PricesComponent,
      },
      {
        path: 'reports',
        data: { title: 'Reports' },
        component: ReportsComponent,
      },
      {
        path: 'cumulative',
        data: { title: 'Training attendance cumulative' },
        component: CumulativeComponent,
      },
      {
        path: 'user',
        data: { title: 'User Administration' },
        component: UserComponent,
      },
      {
        path: 'user/profile',
        data: { title: 'My Profile' },
        component: UserProfileComponent,
      },

      // VB:REPLACE-END:ROUTER-CONFIG
    ],
  },
  {
    path: 'auth',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/auth/auth.module').then(m => m.AuthModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/auth/404',
  },
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: AppPreloader,
      relativeLinkResolution: 'legacy',
    }),
    LayoutsModule,
    WidgetsComponentsModule,
    MyComponentsModule,
  ],
  declarations: [
    // VB:REPLACE-START:ROUTER-DECLARATIONS
    DashboardComponent,
    LkmComponent,
    LkmInterviewsComponent,
    LkmMystoriesComponent,
    LkmSocComponent,
    MgfComponent,
    MgfOrgComponent,
    MgfEvaluationsComponent,
    MgfProposalsComponent,
    MgfApplicationsComponent,
    MgfApplicantsComponent,
    MgfApprovalsComponent,
    MgfConceptNotesComponent,
    MeComponent,
    MeSchedulesComponent,
    CbbComponent,
    CbbTopicsComponent,
    CbbAttendanceComponent,
    CbbSchedulesComponent,
    MarketComponent,
    PricesComponent,
    ReportsComponent,
    CumulativeComponent,
    UserComponent,
    UserProfileComponent,

    // VB:REPLACE-END:ROUTER-DECLARATIONS
  ],
  providers: [AppPreloader],
  exports: [RouterModule],
})
export class AppRoutingModule {}
