//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlPubSubC}      from "@kwNgUiCtrl/kwNgUiCtrlPubSubC";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtSubState}            from '@kunstwerk/core-ui';

import {dwTimeFltrStArr,
        dwTimeFltrStView}      from "./dwTimeFltrSt";


const sSTATE: string            = "timeFltr";


const STATES: kwtSubState[] =
[
    {sName: "timeSheet",    sType: "base" },
    {sName: "employee",     sType: "link", sParam: "employee"  },
    {sName: "schedule",     sType: "link", sParam: "schedule"  }
];

//@formatter:off




@Component({selector: 'dw-time-fltr-ctrl-pub-fltr', template: ``})
export class dwTimeFltrCtrlPubSub extends kwNgUiCtrlPubSubC
{
    constructor(arr: dwTimeFltrStArr)
    {super(arr, sSTATE, STATES)}
}


@Component({selector: 'dw-time-fltr-ctrl-view', template: ``})
export class dwTimeFltrCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwTimeFltrStView)
    {super(view, sSTATE)}
}
