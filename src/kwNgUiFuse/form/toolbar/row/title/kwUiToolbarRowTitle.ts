/**********************************************************************
 *
 * kwNgUiFuse/toolbar/row/title/kwUiToolbarRowTitle.ts
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

import {Component}            from '@angular/core';
import {ViewEncapsulation}    from '@angular/core';

import {kw}                   from "@kunstwerk/core";
import {kwLog}                from "@kunstwerk/core";
import {kwNgUiCtrlComp}       from "@kwNgUiCtrl/kwNgUiCtrlComp";


const sTAG: string = "title";


@Component({
    selector     : 'kw-ui-toolbar-row-title',
    templateUrl  : './kwUiToolbarRowTitle.html',
    styleUrls    : ['./kwUiToolbarRowTitle.scss'],
    encapsulation: ViewEncapsulation.None
})
export class kwUiToolbarRowTitle extends kwNgUiCtrlComp
{

    constructor()
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }
    protected initCmp(): void
    {
        const log = new kwLog(this.sClass, "initCmp");
        //console.info(log.called());
    }

    protected parseData(data: any): void {
        const log = new kwLog(this.sClass, "parseData");
        //console.info(log.called());
    }

    protected parseInits(inits: object): void {
        const log = new kwLog(this.sClass, "parseInits");
        //console.info(log.called());
    }

    protected parseView(view: object): void
    {
        const log = new kwLog(this.sClass, "parseView");
        //console.info(log.called());

        if (!kw.isString(this.sText))
        {
            console.error(log.invalid("sText"));
            return;
        }
    }


}
