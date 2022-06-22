//@formatter:off
import {Component}          from '@angular/core';

import {kw}                 from "@kunstwerk/core";
import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsCtrlSubMap}     from "@kwBsCtrl/kwBsCtrlSubMap";
import {kwInitMap}          from '@kunstwerk/core-ui';
import {kwNgUiInitsFctyMsg} from "./kwNgUiInitsUtil";
import {kwNgUiInitsStApi,
        kwNgUiInitsStArr,
        kwNgUiInitsStMap,
        kwNgUiInitsStMsg}   from "./kwNgUiInitsSt";
import {kwMap}              from "@kunstwerk/core";
import {kwNgCtrlAjax}       from "@kwNgCtrl/kwNgCtrlAjax";
import {kwNgCtrlMsgStat}    from "@kwNgCtrl/kwNgCtrlMsgStat";
import {kwUiStatusEnum}     from '@kunstwerk/core-ui';


const nSTAT: number         = kwUiStatusEnum.state;
const sPROP: string         = "inits";

//@formatter:off



@Component({selector: 'kw-ng-ui-inits-ctrl-api', template: ``})
export class kwNgUiInitsCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwNgUiInitsStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-ng-ui-inits-ctrl-load', template: ``})
export class kwNgUiInitsCtrlLoad extends kwNgCtrlAjax
{
    constructor(msg: kwNgUiInitsStMsg, data: kwNgUiInitsStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-ng-ui-inits-ctrl-map', template: ``})
export class kwNgUiInitsCtrlMap extends kwBsCtrlSubMap
{
    constructor(arr: kwNgUiInitsStArr, map: kwNgUiInitsStMap){super(arr, map)}

    protected createMap(data: object[]): kwMap
    {
        //console.log(this.sClass, "::createMap() called.");

        if (!kw.isValid(data))
        {
            console.error(this.sClass, "::createMap() data is invalid.");
            return;
        }

        const map = new kwInitMap(data);
        if (!map.init())
        {
            console.error(this.sClass, "::createMap() error creating map.");
            return;
        }

        return map;
    }
}


@Component({selector: 'kw-ng-ui-inits-ctrl-msg', template: ``})
export class kwNgUiInitsCtrlMsg extends kwNgCtrlMsgStat
{
    constructor(fcty: kwNgUiInitsFctyMsg, msg: kwNgUiInitsStMsg)
    {super(fcty, msg, nSTAT)}
}
