import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-top-news',
    templateUrl: './top-news.page.html',
    styleUrls: ['./top-news.page.scss'],
})
export class TopNewsPage implements OnInit {

    constructor() {
    }

    ngOnInit() {
        setTimeout(() => {
            console.table('INICIADO');
        }, 2500);
    }

    ionViewDidEnter(){
        setTimeout(() => {
            console.table('INICIADO DID ENTER');
        }, 2500);
    }

}
