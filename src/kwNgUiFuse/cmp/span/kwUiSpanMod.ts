/**********************************************************************
 *
 * kw/kwUiSpanMod.ts
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

import {kwUiSubTitleMod} from '../subTitle/kwUiSubTitleMod';

import {kwUiSpan} from './kwUiSpan';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiSubTitleMod
            ],
        declarations:
            [
                kwUiSpan,
            ],
        providers:
            [],
        exports:
            [
                kwUiSpan,
            ]
    })
//@formatter:on
export class kwUiSpanMod {

}
