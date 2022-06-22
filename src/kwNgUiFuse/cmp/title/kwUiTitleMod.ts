/**********************************************************************
 *
 * kw/kwUiTitleMod.ts
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

import {kwUiSpanMod} from '../span/kwUiSpanMod';
import {kwUiTitle} from './kwUiTitle';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiSpanMod,
            ],
        declarations:
            [
                kwUiTitle,
            ],
        providers:
            [],
        exports:
            [
                kwUiTitle,
            ]
    })
//@formatter:on
export class kwUiTitleMod {

}
