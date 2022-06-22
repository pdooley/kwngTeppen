/**********************************************************************
 *
 * kw/kwUiImgMod.ts
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

import {kwUiIconMod} from '../icon/kwUiIconMod';
import {kwUiLogoMod} from '../logo/kwUiLogoMod';
import {kwUiSvgMod} from '../svg/kwUiSvgMod';
import {kwUiSvgRawMod} from '../svgRaw/kwUiSvgRawMod';

import {kwUiImg} from './kwUiImg';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiIconMod,
                kwUiLogoMod,
                kwUiSvgMod,
                kwUiSvgRawMod,
            ],
        declarations:
            [
                kwUiImg,
            ],
        providers:
            [],
        exports:
            [
                kwUiImg,
            ]
    })
//@formatter:on
export class kwUiImgMod {

}
