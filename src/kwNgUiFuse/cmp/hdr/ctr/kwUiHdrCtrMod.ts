/**********************************************************************
 *
 * kw/kwUiHdrMod.ts
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

import {kwUiSpanMod} from '../../span/kwUiSpanMod';
import {kwUiSubTitleMod} from '../../subTitle/kwUiSubTitleMod';
import {kwUiTabsMod} from '../../tabs/kwUiTabsMod';
import {kwUiTitleMod} from '../../title/kwUiTitleMod';

import {kwUiHdrCtr} from './kwUiHdrCtr';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiSpanMod,
                kwUiSubTitleMod,
                kwUiTabsMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiHdrCtr,
            ],
        providers:
            [],
        exports:
            [
                kwUiHdrCtr,
            ]
    })
//@formatter:on
export class kwUiHdrCtrMod {

}
