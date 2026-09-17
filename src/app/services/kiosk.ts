import { Injectable } from '@angular/core';
import { CapacitorAndroidKiosk } from '@capgo/capacitor-android-kiosk';
import { Platform } from '@ionic/angular/standalone';

@Injectable({ providedIn: 'root' })
export class KioskService {

  constructor(
    private platform: Platform
  ){}

  async enter() {
    // 1. Enter standard Kiosk lock task mode (Now backed by Device Owner privileges!)
    await CapacitorAndroidKiosk.enterKioskMode();

    // 2. Lock down the physical keys immediately after entering kiosk mode
    if (this.platform.is('android')) {
      await this.blockHardwareKeys();

      // 3. Dialogue with MainActivity.java to lock volume thread context instantly
      if ((window as any).AndroidKioskBridge) {
        (window as any).AndroidKioskBridge.toggleButtons(true);
      }
    }
  }

  private async blockHardwareKeys() {
    try {
      await CapacitorAndroidKiosk.setAllowedKeys({
        volumeUp: false,
        volumeDown: false,
        back: false,
        home: false,
        recent: false
      });
      console.log('Hardware buttons locked successfully via Device Owner state');
    } catch (error) {
      console.error('Failed to lock hardware buttons:', error);
    }
  }

  async exit() {
    // 1. Release standard Kiosk lock task mode
    await CapacitorAndroidKiosk.exitKioskMode();

    // 2. Dialogue with MainActivity.java to unlock volume & sleep buttons instantly
    if (this.platform.is('android')) {
      // Restore system key allowances back to default values
      try {
        await CapacitorAndroidKiosk.setAllowedKeys({
          volumeUp: true,
          volumeDown: true,
          back: true,
          home: true,
          recent: true
        });
      } catch (e) {
        console.error('Failed to restore keys during exit:', e);
      }

      if ((window as any).AndroidKioskBridge) {
        (window as any).AndroidKioskBridge.toggleButtons(false);
      }
    }
  }

  async isInKiosk() {
    return CapacitorAndroidKiosk.isInKioskMode();
  }

  isSetAsLauncher = async () => {
    const { isLauncher } = await CapacitorAndroidKiosk.isSetAsLauncher();
    console.log('App is launcher:', isLauncher);
    if(!isLauncher && this.platform.is('android')) {
      alert('Please set the app as launcher to enable kiosk mode');
      await CapacitorAndroidKiosk.setAsLauncher();
    }
  }
}
