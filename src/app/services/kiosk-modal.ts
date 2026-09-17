import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonText
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular/standalone';
import { KioskService } from '../services/kiosk'; // <-- Change this path if needed to find your service

@Component({
  selector: 'app-exit-kiosk-modal',
  standalone: true,
  imports: [
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonText
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Kiosk Mode</ion-title>

        <ion-button slot="end" fill="clear" (click)="cancel()">
          ✕
        </ion-button>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-list>
        <ion-item>
          <ion-label position="stacked">Password</ion-label>
          <ion-input type="password" [(ngModel)]="password"></ion-input>
        </ion-item>
      </ion-list>

      @if (error) {
        <ion-text color="danger">
          Password errata
        </ion-text>
      }

      <ion-button color="primary" expand="block" (click)="checkPassword()">
        Sblocca
      </ion-button>

    </ion-content>
  `
})
export class KioskModalComponent implements OnDestroy {

  private modalCtrl = inject(ModalController);
  private kiosk = inject(KioskService); // <-- Securely grabbed via Angular Injection

  password = '';
  error = false;

  private timer?: any;
  private readonly SECRET = '1112';

  constructor() {
    this.timer = setTimeout(() => {
      this.cancel();
    }, 15000);
  }

  async checkPassword() {
    if (this.password === this.SECRET) {
      // Triggers the escape sequence, hitting Capgo and your custom Java thread setup
      await this.kiosk.exit();
      this.modalCtrl.dismiss(null, 'exit');
    } else {
      this.error = true;
    }
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
