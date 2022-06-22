/**********************************************************************
 *
 * kwNgUiFuse/cmp/hdr/kwUiHdrRht.ts
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
import {kwtHdrRht} from "./kwtHdrRht";

//@formatter:on

const sTAG: string = "rht";

@Component({
    selector: "kw-ui-hdr-rht",
    templateUrl: "kwUiHdrRht.html",
    styleUrls: ["kwUiHdrRht.scss"]
})
export class kwUiHdrRht extends kwNgUiCtrlComp {

    btn: object;
    img: object;
    title: object;

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

        const type: kwtHdrRht = <kwtHdrRht>view;

        const btn: object = type.btn;
        if (kw.isValid(btn)) {
            //console.info(this.sClass, "::parseView() btn is [", btn, "]");
            this.btn = btn;
        }

        const img: object = type.img;
        if (kw.isValid(img)) {
            //console.info(this.sClass, "::parseView() img is [", img, "]");
            this.img = img;
        }

        const title: object = type.title;
        if (kw.isValid(title)) {
            //console.info(this.sClass, "::parseView() title is [", title, "]");
            this.title = title
        }

        if (kw.isNull(img) && kw.isNull(title) && kw.isNull(btn)) {
            console.error(this.sClass, "::parseView() Only recognizes [img, title, btn]");
        }
    }
}
