import { Component, inject } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { AppHeader } from '../../shared/header/header';
import { Content } from '@/app/services/content';
import { RouterLink } from '@angular/router';
import { ModalController } from '@ionic/angular/standalone';
import { KioskModalComponent } from '../../services/kiosk-modal';
import { KioskService } from '@/app/services/kiosk';

@Component({
  selector: 'app-master',
  templateUrl: 'master.page.html',
  styleUrls: ['master.page.scss'],
  imports: [IonContent, AppHeader, RouterLink, IonGrid, IonRow, IonCol],
})

  export class MasterPage {

  protected readonly kiosk = inject(KioskService);
  protected readonly content = inject(Content);
  private readonly modalCtrl = inject(ModalController);

  readonly pages = this.content.pages;

  async openExitKioskModal() {
    const modal = await this.modalCtrl.create({
      component: KioskModalComponent,
      backdropDismiss: true
    });

    await modal.present();

    const { role } = await modal.onDidDismiss();

    if (role === 'exit') {
      await this.kiosk.exit()
    }
  }
}
