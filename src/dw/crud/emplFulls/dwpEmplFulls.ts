/**********************************************************************
 *
 * dw/crud/emplFulls/dwpEmplFulls.scss
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 Teppen Inc.
 *
 **********************************************************************/
//@formatter:off

import {Component}                  from '@angular/core';
import {ViewEncapsulation}          from '@angular/core';

import {fuseAnimations}             from "@fuse/animations";

import {kwLog}                      from "@kunstwerk/core";
import {kwNgUiCtrlPagePubSub}       from "@kwNgUiCtrl/kwNgUiCtrlPagePubSub";

import {dwEmplFullsStArr,
        dwEmplFullsStView}          from "@dwState/emplFulls/dwEmplFullsSt";
import {dwEmployeesStInit}          from "@dwState/employees/dwEmployeesSt";


const sTAG: string                  = "emplFulls";


@Component({
    selector:       'dwp-emplFulls',
    templateUrl:    'dwpEmplFulls.html',
    styleUrls:      ['dwpEmplFulls.scss'],
    encapsulation:  ViewEncapsulation.None,
    animations:     fuseAnimations
})
export class dwpEmplFulls extends kwNgUiCtrlPagePubSub
{


    constructor(
        srvcInit:   dwEmployeesStInit,
        srvcView:   dwEmplFullsStView,
        srvcData:   dwEmplFullsStArr     )
    {
        super(
            srvcInit,
            srvcView,
            srvcData,
            sTAG    );


        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

    protected parseData(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseData");
        //console.log(log.called());
    }

    protected parseInits(inits: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseInits");
        //console.log(log.called());
    }

    protected parseView(view: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseView");
        //console.log(log.called());
    }

}
