/**********************************************************************
 *
 * kwBs/ctrl/kwBsCtrlSubMap.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {OnDestroy}          from '@angular/core';
import {OnInit}             from '@angular/core';

import {AppInjector}        from "@app/appInjector";

import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMap}          from "@kwBsStat/kwBsStMap";
import {kwCtrlSubMap}       from "@kunstwerk/core";
import {kwLog}              from "@kunstwerk/core";
import {kwNgPubSub}         from "@kwNg/pubSub/kwNgPubSub";



export abstract class kwBsCtrlSubMap    extends kwCtrlSubMap
                                        implements OnInit, OnDestroy
{

    protected constructor(
        src: kwBsStArr,
        dst: kwBsStMap )
    {
        super(
            src,
            dst );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

    }

//@formatter:on

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
