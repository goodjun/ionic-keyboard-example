import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
    providers: [Keyboard]
})
export class ChatPage {

    constructor(
        public navCtrl: NavController,
        public platform: Platform,
        public keyboard: Keyboard,
    ) {

        if (platform.is('ios')) {
            let appEl = <HTMLElement>(document.getElementsByTagName('ION-APP')[0]);
            let appElHeight = appEl.clientHeight;

            this.keyboard.disableScroll(true);

            window.addEventListener('native.keyboardshow', (e) => {
                appEl.style.height = (appElHeight - (<any>e).keyboardHeight) + 'px';
            });

            window.addEventListener('native.keyboardhide', () => {
                appEl.style.height = '100%';
            });
        }

    }

    ionViewDidload() {
        this.keyboard.disableScroll(true);
    }

}
