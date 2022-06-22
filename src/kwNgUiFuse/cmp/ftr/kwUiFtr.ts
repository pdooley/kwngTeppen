/**********************************************************************
 *
 * kwNgUiFuse/cmp/ftr/kwUiFtr.ts
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
import {Component} from "@angular/core";

import {kw} from "@kunstwerk/core";
import {kwLog} from "@kunstwerk/core";
import {kwNgUiCtrlComp} from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtFtr} from "./kwtFtr";

//@formatter:on

const sTAG: string = "ftr";

@Component({
    selector: "kw-ui-ftr",
    templateUrl: "kwUiFtr.html",
    styleUrls: ["kwUiFtr.scss"]
})
export class kwUiFtr extends kwNgUiCtrlComp {

    constructor()
    {
        super(sTAG);
        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }

//@formatter:on

    protected initCmp(): void {
        //console.log(this.sClass, "::parseView() called.");
    }

    protected parseData(data: any): void {
        //console.log(this.sClass, "::parseData() called.");
    }

    protected parseInits(inits: object): void {
        //console.log(this.sClass, "::parseInits() called.");
    }

    protected parseView(view: object): void {
        //console.log(this.sClass, "::parseView() called.");

        if (kw.isNull(view)) {
            console.error(this.sClass, "::parseView() view is invalid");
            return;
        }

        const type: kwtFtr = <kwtFtr>view;

        const ctr: object = type.ctr;
        if (kw.isValid(ctr)) {
            //console.info(this.sClass, "::parseView() ctr is [", ctr, "]");
        }

        const lft: object = type.lft;
        if (kw.isValid(lft)) {
            //console.info(this.sClass, "::parseView() lft is [", lft, "]");
        }

        const rht: object = type.rht;
        if (kw.isValid(rht)) {
            //console.info(this.sClass, "::parseView() rht is [", rht, "]");
        }


        if (kw.isNull(ctr) && kw.isNull(lft) && kw.isNull(rht)) {
            console.error(this.sClass, "::parseView() Only recognizes [ctr, lft, rht]");
        }
    }
}
