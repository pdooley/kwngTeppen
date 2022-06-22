/**********************************************************************
 *
 * kw/kwUiUtilMod.ts
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
import {kwUiInputMod} from '../../input/kwUiInputMod';
import {kwUiSelectMod} from '../../select/kwUiSelectMod';
import {kwUiTitleMod} from '../../title/kwUiTitleMod';

import {kwUiUtilLft} from './kwUiUtilLft';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiBtnMod,
                kwUiImgMod,
                kwUiInputMod,
                kwUiSelectMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiUtilLft,
            ],
        providers:
            [],
        exports:
            [
                kwUiUtilLft,
            ]
    })
//@formatter:on
export class kwUiUtilLftMod {

}
