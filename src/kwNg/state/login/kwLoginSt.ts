/**********************************************************************
 *
 * kwNg/state/login/kwLoginSt.ts
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

import {kw }                from "@kunstwerk/core";
import {kwCred }            from "@kunstwerk/core";
import {kwtCred }           from "@kunstwerk/core";
import {kwStateX }          from "@kunstwerk/core";
import {kwBsStVal}          from "@kwBsStat/kwBsStVal";
//@formatter:on


@Injectable({providedIn: 'root'})
export class kwLoginStVal extends kwBsStVal
{

    constructor(){super()}
    public get(): kwCred {return <kwCred>super.get()}

    static xExport(record: kwtCred)
    {
        //console.log("kwLoginVal::xExport() called.");

        const recordNew: kwtCred = new kwtCred();

        if (kw.isNull(record))
        {
            console.error("kwLoginVal::xExport() record is invalid.");
            return;
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwLoginVal::xExport() error creating x.");
            return;
        }

        recordNew.sUserName = x.getString("sUsername");
        recordNew.sPassword = x.getString("sPassword");

        return recordNew;
    }

    static xImport(record: kwtCred)
    {
        //console.log("srvcStateLogin::ximport() called.");

        const recordNew: kwtCred = new kwtCred();

        if (kw.isNull(record))
        {
            console.error("srvcStateLogin::ximport() record is invalid.");
            return;
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwLoginVal::xExport() error creating x.");
            return;
        }

        recordNew.sUserName = x.getString("username");
        recordNew.sPassword = x.getString("password");

        return recordNew;
    }

}
