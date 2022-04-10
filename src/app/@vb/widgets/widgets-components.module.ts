import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NestableModule } from 'ngx-nestable';

import { VbHeadersCardFooterComponent } from './Headers/CardFooter/card-footer.component';
import { VbHeadersCardFooter2Component } from './Headers/CardFooter2/card-footer-2.component';
import { VbHeadersCardHeaderComponent } from './Headers/CardHeader/card-header.component';
import { VbHeadersCardHeader2Component } from './Headers/CardHeader2/card-header-2.component';
import { VbHeadersCardHeader3Component } from './Headers/CardHeader3/card-header-3.component';
import { VbHeadersCardHeader4Component } from './Headers/CardHeader4/card-header-4.component';
import { VbHeadersCardHeader5Component } from './Headers/CardHeader5/card-header-5.component';
import { VbHeadersCardHeaderTabbedComponent } from './Headers/CardHeaderTabbed/card-header-tabbed.component';
import { VbHeadersCardHeaderTabbed2Component } from './Headers/CardHeaderTabbed2/card-header-tabbed-2.component';
import { VbHeadersCardHeaderTabbed3Component } from './Headers/CardHeaderTabbed3/card-header-tabbed-3.component';
import { VbHeadersCardHeaderTabbed4Component } from './Headers/CardHeaderTabbed4/card-header-tabbed-4.component';
import { VbHeadersCardHeaderTabbed5Component } from './Headers/CardHeaderTabbed5/card-header-tabbed-5.component';
import { VbHeadersCardHeaderTabbed6Component } from './Headers/CardHeaderTabbed6/card-header-tabbed-6.component';
import { VbHeadersHeadingComponent } from './Headers/Heading/heading.component';
import { VbHeadersHeading2Component } from './Headers/Heading2/heading-2.component';
import { VbHeadersHeading3Component } from './Headers/Heading3/heading-3.component';
import { VbHeadersTagComponent } from './Headers/Tag/tag.component';

import { VbHiddenColorsComponent } from './Hidden/Colors/colors.component';
import { VbHiddenGridComponent } from './Hidden/Grid/grid.component';
import { VbHiddenIconsFeatherComponent } from './Hidden/IconsFeather/icons-feather.component';
import { VbHiddenIconsFontawesomeComponent } from './Hidden/IconsFontawesome/icons-fontawesome.component';
import { VbHiddenIconsIcomoonFreeComponent } from './Hidden/IconsIcomoonFree/icons-icomoon-free.component';
import { VbHiddenIconsLineariconsFreeComponent } from './Hidden/IconsLineariconsFree/icons-linearicons-free.component';
import { VbHiddenKitAntdComponent } from './Hidden/KitAntd/kit-antd.component';
import { VbHiddenTypographyComponent } from './Hidden/Typography/typography.component';
import { VbHiddenUtilitiesComponent } from './Hidden/Utilities/utilities.component';


import { VbGeneral1Component } from './WidgetsGeneral/1/1.component';
import { VbGeneral1v1Component } from './WidgetsGeneral/1v1/1v1.component';
import { VbGeneral2Component } from './WidgetsGeneral/2/2.component';
import { VbGeneral2v1Component } from './WidgetsGeneral/2v1/2v1.component';
import { VbGeneral2v2Component } from './WidgetsGeneral/2v2/2v2.component';
import { VbGeneral2v3Component } from './WidgetsGeneral/2v3/2v3.component';
import { VbGeneral2v4Component } from './WidgetsGeneral/2v4/2v4.component';
import { VbGeneral3Component } from './WidgetsGeneral/3/3.component';
import { VbGeneral3v1Component } from './WidgetsGeneral/3v1/3v1.component';
import { VbGeneral4Component } from './WidgetsGeneral/4/4.component';
import { VbGeneral5Component } from './WidgetsGeneral/5/5.component';
import { VbGeneral5v1Component } from './WidgetsGeneral/5v1/5v1.component';
import { VbGeneral6Component } from './WidgetsGeneral/6/6.component';
import { VbGeneral6v1Component } from './WidgetsGeneral/6v1/6v1.component';
import { VbGeneral7Component } from './WidgetsGeneral/7/7.component';
import { VbGeneral8Component } from './WidgetsGeneral/8/8.component';
import { VbGeneral9Component } from './WidgetsGeneral/9/9.component';
import { VbGeneral10Component } from './WidgetsGeneral/10/10.component';
import { VbGeneral10v1Component } from './WidgetsGeneral/10v1/10v1.component';
import { VbGeneral11Component } from './WidgetsGeneral/11/11.component';
import { VbGeneral11v1Component } from './WidgetsGeneral/11v1/11v1.component';
import { VbGeneral12Component } from './WidgetsGeneral/12/12.component';
const COMPONENTS = [

    VbHeadersCardFooterComponent,
    VbHeadersCardFooter2Component,
    VbHeadersCardHeaderComponent,
    VbHeadersCardHeader2Component,
    VbHeadersCardHeader3Component,
    VbHeadersCardHeader4Component,
    VbHeadersCardHeader5Component,
    VbHeadersCardHeaderTabbedComponent,
    VbHeadersCardHeaderTabbed2Component,
    VbHeadersCardHeaderTabbed3Component,
    VbHeadersCardHeaderTabbed4Component,
    VbHeadersCardHeaderTabbed5Component,
    VbHeadersCardHeaderTabbed6Component,
    VbHeadersHeadingComponent,
    VbHeadersHeading2Component,
    VbHeadersHeading3Component,
    VbHeadersTagComponent,

    VbHiddenColorsComponent,
    VbHiddenGridComponent,
    VbHiddenIconsFeatherComponent,
    VbHiddenIconsFontawesomeComponent,
    VbHiddenIconsIcomoonFreeComponent,
    VbHiddenIconsLineariconsFreeComponent,
    VbHiddenKitAntdComponent,
    VbHiddenTypographyComponent,
    VbHiddenUtilitiesComponent,

    VbGeneral1Component,
    VbGeneral1v1Component,
    VbGeneral2Component,
    VbGeneral2v1Component,
    VbGeneral2v2Component,
    VbGeneral2v3Component,
    VbGeneral2v4Component,
    VbGeneral3Component,
    VbGeneral3v1Component,
    VbGeneral4Component,
    VbGeneral5Component,
    VbGeneral5v1Component,
    VbGeneral6Component,
    VbGeneral6v1Component,
    VbGeneral7Component,
    VbGeneral8Component,
    VbGeneral9Component,
    VbGeneral10Component,
    VbGeneral10v1Component,
    VbGeneral11Component,
    VbGeneral11v1Component,
    VbGeneral12Component,
];

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        PerfectScrollbarModule,
        CommonModule,
        NestableModule,
    ],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class WidgetsComponentsModule {}
