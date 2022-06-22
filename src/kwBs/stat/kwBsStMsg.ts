/**********************************************************************
 *
 * kwBs/stat/kwBsStMsg.ts
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
import {AppInjector}      from '@app/appInjector';

import {kwTraceStTrace}   from "@kwBsState/../trace/kwTraceSt";
import {kwLog}            from "@kunstwerk/core";
import {kwStMsg}          from "@kunstwerk/core";

//@formatter:off


export abstract class kwBsStMsg extends kwStMsg
{
    protected constructor(
        data?: object   )
    {
        super(
            AppInjector.get(kwTraceStTrace),
            data        );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
   }
}
