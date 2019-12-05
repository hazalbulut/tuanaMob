import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // tslint:disable-next-line: no-inferrable-types
    public endVal: number;
    constructor() { }
    ngOnInit() {
        //
    }
    public onInViewportChange(inViewport: boolean) {
        this.endVal = inViewport ? 52 : 0;
    }

    public countUp() {
        return this.endVal;
    }
}
