import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared.module';
import { WidgetsComponentsModule } from 'src/app/@vb/widgets/widgets-components.module';

import { TopbarComponent } from './Topbar/topbar.component';
import { TopbarActionsComponent } from './Topbar/Actions/actions.component';
import { TopbarIssuesHistoryComponent } from './Topbar/IssuesHistory/issues-history.component';
import { TopbarSearchComponent } from './Topbar/Search/search.component';
import { TopbarUserMenuComponent } from './Topbar/UserMenu/user-menu.component';
import { TopbarProjectManagementComponent } from './Topbar/ProjectManagement/project-management.component';
import { MenuClassicLeftComponent } from './MenuClassic/MenuLeft/menu-left.component';
import { MenuClassicTopComponent } from './MenuClassic/MenuTop/menu-top.component';
import { MenuFlyoutLeftComponent } from './MenuFlyout/MenuLeft/menu-left.component';
import { MenuFlyoutTopComponent } from './MenuFlyout/MenuTop/menu-top.component';
import { MenuSimplyComponent } from './MenuSimply/menu-simply.component';
import { MenuSimplyActionsComponent } from './MenuSimply/Actions/actions.component';
import { MenuSimplyCartComponent } from './MenuSimply/Cart/cart.component';
import { MenuSimplyPagesComponent } from './MenuSimply/MenuPages/menu-pages.component';
import { MenuSimplyStatusComponent } from './MenuSimply/Status/status.component';
import { MenuSimplyUserMenuComponent } from './MenuSimply/UserMenu/user-menu.component';
import { FooterComponent } from './Footer/footer.component';
import { Footer2Component } from './Footer2/footer.component';
import { Footer3Component } from './Footer3/footer.component';
import { Footer4Component } from './Footer4/footer.component';
import { SidebarComponent } from './Sidebar/sidebar.component';
import { VariantsComponent } from './Variants/variants.component';
import { LockscreenComponent } from './Auth/lockscreen/lockscreen.component';
import { LoginComponent } from './Auth/login/login.component';
import { Error404Component } from './Errors/404/404.component';
import { Error500Component } from './Errors/500/500.component';

const COMPONENTS = [
    TopbarComponent,
    TopbarIssuesHistoryComponent,
    TopbarSearchComponent,
    TopbarUserMenuComponent,
    TopbarProjectManagementComponent,
    TopbarActionsComponent,
    MenuClassicLeftComponent,
    MenuClassicTopComponent,
    MenuFlyoutLeftComponent,
    MenuFlyoutTopComponent,
    MenuSimplyComponent,
    MenuSimplyActionsComponent,
    MenuSimplyCartComponent,
    MenuSimplyPagesComponent,
    MenuSimplyStatusComponent,
    MenuSimplyUserMenuComponent,
    FooterComponent,
    Footer2Component,
    Footer3Component,
    Footer4Component,
    SidebarComponent,
    VariantsComponent,
    LockscreenComponent,
    LoginComponent,
    Error404Component,
    Error500Component,
];

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        PerfectScrollbarModule,
        WidgetsComponentsModule,
    ],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class ComponentsModule {}
