import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SleepService {

  private readonly router = inject(Router);

  private readonly inactivityMs = 5  * 1000;

  public readonly isAsleep = signal(false);

  private timerId: ReturnType<typeof setInterval> | null = null;
  private maxTimestampUnix = 0;

  public startTracking(): void {
    this.stopTracking();

    this.isAsleep.set(false);

    this.resetActivity();

    this.timerId = setInterval(() => {
      if (Date.now() >= this.maxTimestampUnix) {
        this.isAsleep.set(true);
        this.stopTracking();

        console.log(
          'App has been inactive for 5 minutes. Redirecting to home page...',
        );

        this.router.navigate(['/']);
      }
    }, 1000);
  }

  public resetActivity(): void {
    console.log('User activity detected. Resetting inactivity timer.');
    this.maxTimestampUnix = Date.now() + this.inactivityMs;
  }

  public stopTracking(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}
