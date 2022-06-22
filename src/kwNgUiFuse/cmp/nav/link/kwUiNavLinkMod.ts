/**********************************************************************
 *
 * kw/kwUiNavLinkMod.ts
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

import {kwUiImgMod} from '../../img/kwUiImgMod';
import {kwUiTitleMod} from '../../title/kwUiTitleMod';

import {kwUiNavLink} from './kwUiNavLink';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiImgMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiNavLink,
            ],
        providers:
            [],
        exports:
            [
                kwUiNavLink,
            ]
    })
//@formatter:on
export class kwUiNavLinkMod {

}
