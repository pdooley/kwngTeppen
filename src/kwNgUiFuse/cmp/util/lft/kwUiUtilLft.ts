/**********************************************************************
 *
 * kwNgUiFuse/cmp/util/kwUiUtilLft.ts
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
import {kwtUtilLft} from "./kwtUtilLft";

//@formatter:on

const sTAG: string = "lft";

@Component({
    selector: "kw-ui-util-lft",
    templateUrl: "kwUiUtilLft.html",
    styleUrls: ["kwUiUtilLft.scss"]
})
export class kwUiUtilLft extends kwNgUiCtrlComp {

    btn: object;
    img: object;
    title: object;
    input: object;
    select: object;

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

        const type: kwtUtilLft = <kwtUtilLft>view;

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
            this.title = title;
        }

        const input: object = type.input;
        if (kw.isValid(input)) {
            //console.info(this.sClass, "::parseView() input is [", input, "]");
            this.input = input;
        }

        const select: object = type.select;
        if (kw.isValid(select)) {
            //console.info(this.sClass, "::parseView() select is [", select, "]");
            this.select = select;
        }

        if (kw.isNull(btn)
            && kw.isNull(img)
            && kw.isNull(input)
            && kw.isNull(select)
            && kw.isNull(title)) {
            const sMsg = "Only recognize [btn, img, input, select, title]"
            console.error(this.sClass, "::parseView() ", sMsg);
        }

    }

}
