/**********************************************************************
 *
 * kwNgUi/stat/kwUiStView.ts
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

import {kwTraceStTrace}   from "@kwBs/trace/kwTraceSt";
import {kwLog}            from "@kunstwerk/core";
import {kwUiStView}       from '@kunstwerk/core-ui';
//@formatter:off


export abstract class kwNgUiStView extends kwUiStView
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
