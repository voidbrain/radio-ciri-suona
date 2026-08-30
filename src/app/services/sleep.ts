import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SleepService {
  private readonly maxTimestampUnix = Date.now() + (5 * 1000 * 60); // 5 min
  private readonly router = inject(Router);

  // Track if the app is currently in a "sleeping/timed-out" state
  public readonly isAsleep = signal<boolean>(false);

  // Keep track of the active interval ID so we can clean it up if needed
  private timerId: any = null;

  /**
   * Starts monitoring the current time against an expiration timestamp.
   * @param maxTimestampUnix The chosen maximum allowable Unix timestamp (in milliseconds)
   */
  public startTracking(): void {
    // Clean up any existing timer first
    this.stopTracking();

    this.timerId = setInterval(() => {
      const now = Date.now(); // Equivalent to timer.now

      if (now > this.maxTimestampUnix) {
        this.isAsleep.set(true);
        this.stopTracking();

        // Automatically redirect to the home page
        console.log('App has entered sleep mode. Redirecting to home page...');
        this.router.navigate(['/']);
      }
    }, 1000); // Check every 1 second
  }

  /**
   * Stops the active interval timer.
   */
  public stopTracking(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}
