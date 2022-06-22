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

import {kwUiBtnMod} from '../../btn/kwUiBtnMod';
import {kwUiImgMod} from '../../img/kwUiImgMod';
import {kwUiTitleMod} from '../../title/kwUiTitleMod';

import {kwUiFtrLft} from './kwUiFtrLft';

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
                kwUiFtrLft,
            ],
        providers:
            [],
        exports:
            [
                kwUiFtrLft,
            ]
    })
//@formatter:on
export class kwUiFtrLftMod {

}
