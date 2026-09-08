import {
  Component,
  computed,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { AppHeader } from '../../shared/header/header';

import { Content } from '@/app/services/content';
import { SleepService } from '@/app/services/sleep';
import { Page } from '@/app/services/content';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
  imports: [IonContent, AppHeader, CommonModule, IonGrid, IonRow, IonCol]
})
export class DetailsPage {

  @HostListener('document:click')
  @HostListener('document:touchstart')
  @HostListener('document:pointerdown')
  @HostListener('document:keydown')
  @HostListener('document:scroll')
  onUserActivity() {
    this.sleepService.resetActivity();
  }


  private readonly content = inject(Content);
  private readonly sleepService = inject(SleepService);
  private readonly route = inject(ActivatedRoute);

  playingId: number | null = null;
  currentPlayer: HTMLAudioElement | null = null;

  play(id: number, player: HTMLAudioElement) {
    if (this.currentPlayer && this.currentPlayer !== player) {
      this.currentPlayer.pause();
      this.currentPlayer.currentTime = 0;
    }

    this.currentPlayer = player;
    this.playingId = id;

    player.play();
  }

  // Safe reactive route param
  readonly id = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id'))
    ),
    { initialValue: null }
  );

  // Safe computed derived state
  protected readonly activePage = computed<Page | null>(() => {
    const id = this.id();

    if (!id) return null;

    const numericId = Number(id);

    if (Number.isNaN(numericId)) return null;

    const pages = this.content.pages();
    const page = pages.find(p => p.id === numericId);

    return page ?? null;
  });

  ionViewWillEnter() {
    this.sleepService.startTracking();
  }

  ionViewWillLeave() {
    this.stopAudio();
    this.sleepService.stopTracking();
  }

  private stopAudio() {
    if (this.currentPlayer) {
      this.currentPlayer.pause();
      this.currentPlayer.currentTime = 0;
      this.currentPlayer = null;
    }

    this.playingId = null;
  }
}
