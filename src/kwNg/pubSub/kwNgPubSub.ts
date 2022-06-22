/**********************************************************************
 *
 * kwNg/pubSub/kwNgPubSub.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/
//@formatter:on
import {Injectable}         from "@angular/core";

import {kwLog}              from '@kunstwerk/core';
import {kwPubSub}           from '@kunstwerk/core';
import {kwTraceStTrace}     from "@kwBs/trace/kwTraceSt";
//@formatter:off


@Injectable({providedIn: 'root'})
export class kwNgPubSub extends kwPubSub
{

    constructor(
        trace: kwTraceStTrace
    )
    {
        super(trace);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }
}
