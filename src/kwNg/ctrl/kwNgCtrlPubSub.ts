/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlPubSub.ts 
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
import {AppInjector }           from '@app/appInjector';
import {OnInit }                from '@angular/core';
import {OnDestroy }             from '@angular/core';

import {kwCtrlPubSub}           from "@kunstwerk/core";
import {kwFctyMsg}              from "@kunstwerk/core";
import {kwNgPubSub}             from "../pubSub/kwNgPubSub";
import {kwStMsg}                from "@kunstwerk/core";


//@formatter:off


export abstract class kwNgCtrlPubSub    extends kwCtrlPubSub
                                        implements OnInit, OnDestroy
{

    protected constructor(
        src: kwFctyMsg,
        dst: kwStMsg,
        sTag: string       )
    {
        super(
            src,
            dst,
            sTag,
            AppInjector.get(kwNgPubSub)  );

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
