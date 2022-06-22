/**********************************************************************
 *
 * kwBs/ctrl/kwBsCtrlMsgStat.tst.ts * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {AppInjector }          from '@app/appInjector';
import {OnInit }               from '@angular/core';
import {OnDestroy }            from '@angular/core';

import {kw }                   from "@kunstwerk/core";
import {kwCtrlMsgStat}         from "@kunstwerk/core";
import {kwFctyMsg }            from "@kunstwerk/core";
import {kwStatusStStatApp }    from "../status/kwStatusSt";
import {kwStMsg }              from "@kunstwerk/core";

//@formatter:off


export abstract class kwNgCtrlMsgStat   extends kwCtrlMsgStat
                                        implements OnInit, OnDestroy
{

    protected constructor(
        src: kwFctyMsg,
        dst: kwStMsg,
        nStat: number       )
    {
        super(
            src,
            dst,
            AppInjector.get(kwStatusStStatApp),
            nStat   );

        //console.log(this.sClass, "::constructor() called");
    }

    ngOnInit()
    {
        //console.log(this.sClass, "::ngOnInit() called");

        if (!this.init())
        {
            console.error(this.sClass, "::ngOnInit() error initializing");
            return;
        }
    }

    ngOnDestroy()
    {
        //console.log(this.sClass, "::ngOnDestroy() called.");
        this.destroy();
    }

}
