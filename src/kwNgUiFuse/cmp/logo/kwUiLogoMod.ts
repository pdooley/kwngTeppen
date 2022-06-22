/**********************************************************************
 *
 * kwNgUiFuse/logo/kwUiLogoMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {NgModule} from '@angular/core';

import {kwUiCoreMod} from '../../core/kwUiCoreMod';

import {kwUiLogo} from './kwUiLogo';
import {kwLog} from "@kunstwerk/core";


@NgModule(
{
    imports:
    [
        kwUiCoreMod
    ],
    declarations:
    [
        kwUiLogo,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiLogo,
    ]
})
//@formatter:on
export class kwUiLogoMod
{
    constructor()
    {
        //console.log("kwUiLogoMod::constructor() called.");
    }
}
