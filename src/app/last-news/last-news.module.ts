import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LastNewsPage} from './last-news.page';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [LastNewsPage],
    declarations: [LastNewsPage]
})
export class LastNewsPageModule {
}
