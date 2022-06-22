/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlPubSubMulti.ts
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

import {kwBsStArr}              from "@kwBsStat/kwBsStArr";
import {kwNgPubSub}             from "@kwNg/pubSub/kwNgPubSub";
import {kwUiCtrlPubSub}         from '@kunstwerk/core-ui';


//@formatter:off


export abstract class kwNgUiCtrlPubSub      extends kwUiCtrlPubSub
                                            implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwBsStArr,
        sTag: string,
        sMain: string,
        maps: string[]  )
    {
        super(
            dst,
            sTag,
            sMain,
            maps,
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
