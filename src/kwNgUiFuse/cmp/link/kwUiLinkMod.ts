/**********************************************************************
 *
 * kw/kwUiLinkMod.ts
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

import {kwUiLink} from './kwUiLink';


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
                kwUiLink,
            ],
        providers:
            [],
        exports:
            [
                kwUiLink,
            ]
    })
//@formatter:on
export class kwUiLinkMod {

}
