import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-last-news',
    templateUrl: './last-news.page.html',
    styleUrls: ['./last-news.page.scss'],
})
export class LastNewsPage implements OnInit {

    constructor() {
    }

    ngOnInit() {
        setTimeout(() => {
            console.log('OK');
        }, 2000);
    }

}
