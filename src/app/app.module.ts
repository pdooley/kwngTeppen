import {NgModule}                   from '@angular/core';
import {BrowserModule}              from '@angular/platform-browser';
import {HttpClientModule}           from '@angular/common/http';
import {BrowserAnimationsModule}    from '@angular/platform-browser/animations';
import {Injector}                   from '@angular/core';
import {RouterModule}               from '@angular/router';
import {Routes}                     from '@angular/router';
import {MatMomentDateModule}        from '@angular/material-moment-adapter';
import {MatButtonModule}            from '@angular/material';
import {MatIconModule}              from '@angular/material';
import {InMemoryWebApiModule}       from 'angular-in-memory-web-api';
import {TranslateModule}            from '@ngx-translate/core';
import 'hammerjs';

import {AngularFireModule}          from '@angular/fire';
import {AngularFirestoreModule}     from '@angular/fire/firestore';
import {AngularFireAuthModule}      from '@angular/fire/auth';

import {environment}                from '../environments/environment';

import {FuseModule}                 from '@fuse/fuse.module';
import {FuseSharedModule}           from '@fuse/shared.module';
import {FuseProgressBarModule}      from '@fuse/components';
import {FuseSidebarModule}          from '@fuse/components';
import {FuseThemeOptionsModule}     from '@fuse/components';

import {fuseConfig}                 from 'app/fuse-config';

import {FakeDbService}              from 'app/fake-db/fake-db.service';
import {AppComponent}               from 'app/app.component';
import {AppStoreModule}             from 'app/store/store.module';
import {LayoutModule}               from 'app/layout/layout.module';

import {setAppInjector}             from './appInjector';

import {AgGridModule}               from 'ag-grid-angular';

import {kwBsMod}                    from '@kwBs/kwBsMod';
import {kwFbMod}                    from '@kwFb/kwFbMod';
import {kwNgMod}                    from '@kwNg/kwNgMod';
import {kwNgUiAgGridMod}            from '@kwNgUiAgGrid/kwNgUiAgGridMod';
import {kwNgUiFuseMod}              from '@kwNgUiFuse/kwNgUiFuseMod';
import {kwNgUiMod}                  from '@kwNgUi/kwNgUiMod';

import {dwMod}                      from '@dw/dwMod';
import {dwCompMod}                  from '@dwComp/dwCompMod';
import {dwCoreMod}                  from '@dwCore/dwCoreMod';
import {dwPageMod}                  from '@dwPage/dwPageMod';
import {dwStateMod}                 from '@dwState/dwStateMod';


const appRoutes: Routes = [
   {
        path        : 'dw',
        loadChildren: '@dw/dwMod#dwMod'
    },
    {
        path        : 'apps',
        loadChildren: './main/apps/apps.module#AppsModule'
    },
    {
        path        : 'pages',
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path        : 'ui',
        loadChildren: './main/ui/ui.module#UIModule'
    },
    {
        path        : 'documentation',
        loadChildren: './main/documentation/documentation.module#DocumentationModule'
    },
    {
        path        : 'angular-material-elements',
        loadChildren: './main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule'
    },
    {
        path      : '**',
        redirectTo: 'apps/dashboards/analytics'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false
            }
            ),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,


        // Material
        MatButtonModule,
        MatIconModule,       

        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,

        AgGridModule.withComponents(
            []
        ),

        kwNgUiMod,
        kwNgMod,
        kwBsMod,
        kwFbMod,
        kwNgUiAgGridMod,
        kwNgUiFuseMod,

        dwMod,
        dwCoreMod,
        dwCompMod,
        dwPageMod,
        dwStateMod,
    ],
    bootstrap:
    [
        AppComponent
    ]
})
export class AppModule
{
    constructor(injector: Injector)
    {
        setAppInjector(injector);
        //console.log('appModule::constructor() called.');
    }
}
