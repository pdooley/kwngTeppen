/**********************************************************************
 *
 * kwBs/stat/kwBsStMap.ts
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
import {AppInjector}        from "@app/appInjector";

import {kwLog}              from "@kunstwerk/core";
import {kwTraceStTrace}     from "@kwBs/trace/kwTraceSt";
import {kwUiStMap}          from '@kunstwerk/core-ui';

//@formatter:off



export abstract class kwNgUiStMap extends kwUiStMap
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
