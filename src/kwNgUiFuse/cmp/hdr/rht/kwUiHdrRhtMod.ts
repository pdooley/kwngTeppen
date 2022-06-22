/**********************************************************************
 *
 * kw/kwUiHdrRhtMod.ts
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

import {kwUiBtnMod} from '../../btn/kwUiBtnMod';
import {kwUiImgMod} from '../../img/kwUiImgMod';
import {kwUiTitleMod} from '../../title/kwUiTitleMod';

import {kwUiHdrRht} from './kwUiHdrRht';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiBtnMod,
                kwUiImgMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiHdrRht,
            ],
        providers:
            [],
        exports:
            [
                kwUiHdrRht,
            ]
    })
//@formatter:on
export class kwUiHdrRhtMod {

}
