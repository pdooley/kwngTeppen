/**********************************************************************
 *
 * kw/stat/kwStVal.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {AppInjector}      from '@app/appInjector';

import {kwLog}            from "@kunstwerk/core";
import {kwStVal}          from "@kunstwerk/core";
import {kwTraceStTrace}   from "@kwBs/trace/kwTraceSt";
//@formatter:off


export abstract class kwBsStVal extends kwStVal
{
    protected constructor(
        data?: object   )
    {
        super(
            AppInjector.get(kwTraceStTrace),
            data    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }
}
