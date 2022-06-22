/**********************************************************************
 *
 * kwBs/state/app/kwBsAppSt
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
import {kwApp }             from "@kunstwerk/core";
import {kwBsStObj}          from "@kwBsStat/kwBsStObj";
import {kwLog }             from "@kunstwerk/core";
import {kwMode }            from "@kunstwerk/core";



@Injectable({providedIn: 'root'})
export class kwBsAppStObj extends kwBsStObj
{
    constructor(){super()}
    public get(): kwApp {return <kwApp>super.get()}

    get bAutoLogin(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "bAutoLogin");
        //console.log(log.called());

        const app: kwApp = this.get();
        if (!kw.isValid(app))
        {
            console.error(log.invalid("app"));
            return false;
        }
        return app.bAutoLogin;
    }

    get sRedirect(): string
    {
        const log: kwLog = new kwLog(this.sClass, "sRedirect");
        //console.log(log.called());

        const app: kwApp = this.get();
        if (!kw.isValid(app))
        {
            console.error(log.invalid("app"));
            return "";
        }
        return app.sRedirect;
    }

    get mode(): kwMode
    {
        const log: kwLog = new kwLog(this.sClass, "sRedirect");
        //console.log(log.called());

        const app: kwApp = this.get();
        if (!kw.isValid(app))
        {
            console.error(log.invalid("app"));
            return null;
        }
        return app.mode;
    }


//@formatter:on

}
