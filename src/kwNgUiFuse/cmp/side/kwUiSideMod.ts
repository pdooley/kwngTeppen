/**********************************************************************
 *
 * kw/kwUiSideMod.ts
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

import {kwUiSide} from './kwUiSide';
import {kwUiInputMod} from '../input/kwUiInputMod';
import {kwUiLogoMod} from '../logo/kwUiLogoMod';
import {kwUiTabsMod} from '../tabs/kwUiTabsMod';
import {kwUiTitleMod} from '../title/kwUiTitleMod';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiInputMod,
                kwUiLogoMod,
                kwUiTabsMod,
                kwUiTitleMod
            ],
        declarations:
            [
                kwUiSide,
            ],
        providers:
            [],
        exports:
            [
                kwUiSide,
            ]
    })
//@formatter:on
export class kwUiSideMod {

}
