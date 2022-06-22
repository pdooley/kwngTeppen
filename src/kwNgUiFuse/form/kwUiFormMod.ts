/**********************************************************************
 *
 * kwNgUiFuse/form/kwUiFormMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

import {NgModule }                 from '@angular/core';

import {FuseSharedModule }         from '@fuse/shared.module';

import {kwUiActionsMod}             from './actions/kwUiActionsMod';
import {kwUiContentMod}             from './content/kwUiContentMod';
import {kwUiToolbarMod}             from './toolbar/kwUiToolbarMod';

import {kwUiForm }                 from './kwUiForm';


@NgModule(
{
    declarations:
    [
        kwUiForm,
    ],
    imports:
    [
        FuseSharedModule,

        kwUiActionsMod,
        kwUiContentMod,
        kwUiToolbarMod,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiForm,
    ]
})
export class kwUiFormMod
{
    constructor()
    {
        //console.log('kwUiFormMod::constructor() called.');
    }
}
