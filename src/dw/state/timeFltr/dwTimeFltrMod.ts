//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwTimeFltr}                from './dwTimeFltr';
import {dwTimeFltrCtrlPubSub,
        dwTimeFltrCtrlView}        from './dwTimeFltrCtrl';


@NgModule(
{
    imports:
        [
        ],
    declarations:
        [
            dwTimeFltr,

            dwTimeFltrCtrlPubSub,
            dwTimeFltrCtrlView
        ],
    exports:
        [
            dwTimeFltr,

            dwTimeFltrCtrlPubSub,
            dwTimeFltrCtrlView
        ]
})
//@formatter:on
export class dwTimeFltrMod
{
    constructor()
    {
        //console.log('dwTimeFltrMod::constructor() called.');
    }
}
