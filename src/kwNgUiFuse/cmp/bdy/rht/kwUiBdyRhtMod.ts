/**********************************************************************
 *
 * kw/kwUiBdyMod.ts
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
import {NgModule} from "@angular/core";

import {kwUiCoreMod} from "../../../core/kwUiCoreMod";

import {kwUiNavMod} from "../../nav/kwUiNavMod";
import {kwUiSideMod} from "../../side/kwUiSideMod";
import {kwUiOptsMod} from "../../opts/kwUiOptsMod";
import {kwUiTabsMod} from "../../tabs/kwUiTabsMod";

import {kwUiBdyRht} from './kwUiBdyRht';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiNavMod,
                kwUiSideMod,
                kwUiOptsMod,
                kwUiTabsMod,
            ],
        declarations:
            [
                kwUiBdyRht,
            ],
        providers:
            [],
        exports:
            [
                kwUiBdyRht,
            ]
    })
//@formatter:on
export class kwUiBdyRhtMod {

}
