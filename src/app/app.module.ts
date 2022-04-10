import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgProgressModule  } from 'ngx-progressbar';
import { registerLocaleData } from '@angular/common';
import { default as localeEn } from '@angular/common/locales/en';
import { NZ_I18N, en_US as localeZorro } from 'ng-zorro-antd/i18n';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers, metaReducers } from './store/reducers';
import { UserEffects } from './store/user/effects';
import { basicAuthService } from './services/basic-auth';
import { FormlyModule } from '@ngx-formly/core';
import { DataService } from './services/data-service';

const LOCALE_PROVIDERS = [
    { provide: LOCALE_ID, useValue: 'en' },
    { provide: NZ_I18N, useValue: localeZorro },
];
registerLocaleData(localeEn, 'en');

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        FormlyModule.forRoot({
            extras: { lazyRender: true },
        }),
  // translate
  TranslateModule.forRoot(),

        // ngrx
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([UserEffects]),
        StoreRouterConnectingModule.forRoot(),

        // nprogress
        NgProgressModule.withConfig({
            thick: true,
            spinner: false,
            color: '#0190fe',
        }),

    ],
    providers: [
    // auth services
        basicAuthService,
        DataService,

        // fake http interceptors
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: MockHttpCallInterceptor,
        //   multi: true,
        // },
   // locale providers
   ...LOCALE_PROVIDERS,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
