import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonButton } from "@ionic/angular/standalone";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [IonButton, CommonModule, IonTitle, IonToolbar, IonHeader, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class AppHeader {
  public readonly title = input.required<string>();
  public readonly backButton = input<boolean>(false);
}
