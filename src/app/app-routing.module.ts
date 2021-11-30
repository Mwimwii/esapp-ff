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
import { CbbComponent } from './pages/cbb/cbb.component'
import { CbbAttendanceComponent } from './pages/cbb/attendance/attendance.component'
import { MarketComponent } from './pages/market/market.component'
import { PricesComponent } from './pages/prices/prices.component'
import { FarmerRegistrationComponent } from './pages/farmer-registration/farmer-registration.component'
import { UserComponent } from './pages/user/user.component'
import { UserProfileComponent } from './pages/user/profile/profile.component'
import { MyComponentsModule } from './components/my-components.module'

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
        data: { title: 'Dashboard' },
        component: DashboardComponent,
      },
      {
        path: 'cbb',
        data: { title: 'Capacity Building' },
        component: CbbComponent,
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
        path: 'farmer-registration',
        data: { title: 'Training attendance farmer-registration' },
        component: FarmerRegistrationComponent,
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
    CbbComponent,
    CbbAttendanceComponent,
    MarketComponent,
    PricesComponent,
    FarmerRegistrationComponent,
    UserComponent,
    UserProfileComponent,
    // VB:REPLACE-END:ROUTER-DECLARATIONS
  ],
  providers: [AppPreloader],
  exports: [RouterModule],
})
export class AppRoutingModule {}
