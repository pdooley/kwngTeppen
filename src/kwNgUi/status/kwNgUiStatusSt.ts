/**********************************************************************
 *
 * kwNgUi/status/kwNgUiStatusSt
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
import {Injectable}         from "@angular/core";

import {kwTraceStTrace}     from "@kwBs/trace/kwTraceSt";

import {kwUiStStat}         from '@kunstwerk/core-ui';


@Injectable({providedIn: 'root'})
export class kwNgUiStatusStStat extends kwUiStStat
{
    constructor(trace: kwTraceStTrace){super(trace)}
}

//@formatter:on
