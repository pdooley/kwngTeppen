/**********************************************************************
 *
 * kw/kwUiFtrMod.ts
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

import {kwUiCoreMod} from '../../../core/kwUiCoreMod';

import {kwUiTabsMod} from '../../tabs/kwUiTabsMod';
import {kwUiTitleMod} from '../../title/kwUiTitleMod';

import {kwUiFtrCtr} from './kwUiFtrCtr';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiTabsMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiFtrCtr,
            ],
        providers:
            [],
        exports:
            [
                kwUiFtrCtr,
            ]
    })
//@formatter:on
export class kwUiFtrCtrMod {

}
