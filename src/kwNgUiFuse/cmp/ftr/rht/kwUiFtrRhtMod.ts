/**********************************************************************
 *
 * kw/kwUiFtrRhtMod.ts
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

import {kwUiFtrRht} from './kwUiFtrRht';

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
                kwUiFtrRht,
            ],
        providers:
            [],
        exports:
            [
                kwUiFtrRht,
            ]
    })
//@formatter:on
export class kwUiFtrRhtMod {

}
