import { Injectable } from '@angular/core';
import { CapacitorAndroidKiosk } from '@capgo/capacitor-android-kiosk';
import { Platform } from '@ionic/angular/standalone';

@Injectable({ providedIn: 'root' })
export class KioskService {

  constructor(
    private platform: Platform
  ){}

  async enter() {
    await CapacitorAndroidKiosk.enterKioskMode();
  }

  async exit() {
    await CapacitorAndroidKiosk.exitKioskMode();
  }

  async isInKiosk() {
    return CapacitorAndroidKiosk.isInKioskMode();
  }

  isSetAsLauncher = async () => {
    // Check if app is set as launcher
    const { isLauncher } = await CapacitorAndroidKiosk.isSetAsLauncher();
    console.log('App is launcher:', isLauncher);
    if(!isLauncher && this.platform.is('android')) {
      alert('Please set the app as launcher to enable kiosk mode');
      // Open home screen settings for user to select your app as launcher
      await CapacitorAndroidKiosk.setAsLauncher();
    }
  }
}
