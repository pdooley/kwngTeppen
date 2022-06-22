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
import {NgModule}       from "@angular/core";

import {kwUiCoreMod}    from "../../../core/kwUiCoreMod";

import {kwUiNavMod}     from "../../nav/kwUiNavMod";
import {kwUiSideMod}    from "../../side/kwUiSideMod";
import {kwUiOptsMod}    from "../../opts/kwUiOptsMod";
import {kwUiTabsMod}    from "../../tabs/kwUiTabsMod";

import {kwUiBdyLft}     from './kwUiBdyLft';

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
                kwUiBdyLft,
            ],
        providers:
            [],
        exports:
            [
                kwUiBdyLft,
            ]
    })
//@formatter:on
export class kwUiBdyLftMod {

}
