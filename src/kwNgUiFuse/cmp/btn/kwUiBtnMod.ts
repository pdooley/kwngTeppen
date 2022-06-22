/**********************************************************************
 *
 * kwNgUiFuse/cmp/btn/kwUiBtnMod.ts
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

import {kwUiImgMod} from '../img/kwUiImgMod';
import {kwUiTitleMod} from '../title/kwUiTitleMod';

import {kwUiBtn} from './kwUiBtn';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiImgMod,
                kwUiTitleMod
            ],
        declarations:
            [
                kwUiBtn,
            ],
        providers:
            [],
        exports:
            [
                kwUiBtn,
            ]
    })
//@formatter:on
export class kwUiBtnMod {

}
