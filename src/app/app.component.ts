import { Component, signal } from '@angular/core';
import { Platform, IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { KioskService } from './services/kiosk';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  protected readonly title = signal('RadioCiriSuona');
  protected readonly isInKioskMode = signal(false);

  constructor(private kiosk: KioskService, private platform: Platform) {
    this.init();
  }

  async init() {
    await this.platform.ready();
    await this.kiosk.enter();
    this.isInKioskMode.set((await this.kiosk.isInKiosk()).isInKioskMode);
  }
}
