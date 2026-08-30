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
        <ion-title>Exit Kiosk Mode</ion-title>

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
          Incorrect password
        </ion-text>
      }

      <ion-button expand="block" (click)="checkPassword()">
        Unlock
      </ion-button>

    </ion-content>
  `
})
export class KioskModalComponent implements OnDestroy {

  private modalCtrl = inject(ModalController);

  password = '';
  error = false;

  private timer?: any;
  private readonly SECRET = '1234';

  constructor() {
    // auto close after 15s
    this.timer = setTimeout(() => {
      this.cancel();
    }, 15000);
  }

  checkPassword() {
    if (this.password === this.SECRET) {
      this.modalCtrl.dismiss(null, 'exit'); // ✅ THIS is correct
    } else {
      this.error = true;
    }
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
