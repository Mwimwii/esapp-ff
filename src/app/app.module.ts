import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgProgressModule  } from 'ngx-progressbar';


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

    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
