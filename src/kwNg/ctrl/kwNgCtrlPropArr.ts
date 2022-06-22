/**********************************************************************
 *
 * kwBs/ctrl/kwNgCtrlPropSubStArr.ts
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
import {OnDestroy}          from "@angular/core";
import {OnInit}             from "@angular/core";

import {kwCtrlPropSubArr}   from "@kunstwerk/core";
import {kwLog}              from "@kunstwerk/core";
import {kwSt}               from "@kunstwerk/core";
import {kwStArr}            from "@kunstwerk/core";



export abstract class kwNgCtrlPropArr   extends kwCtrlPropSubArr
                                        implements OnInit, OnDestroy
{

    protected constructor(
        src: kwSt,
        dst: kwStArr,
        sProp: string )
    {
        super(src, dst, sProp);

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
