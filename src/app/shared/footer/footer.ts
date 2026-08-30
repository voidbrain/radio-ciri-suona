import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonFooter, IonToolbar, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  imports: [IonTitle, IonToolbar, IonFooter, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class AppFooter {
}
