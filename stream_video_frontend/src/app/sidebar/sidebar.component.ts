import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Sidebar for navigation/categories (Accueil, Explorer, Shorts, ...).
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SidebarComponent {
  @Input() selected: string = 'Accueil';
  navSections = [
    { label: 'Accueil', icon: '🏠', selected: true },
    { label: 'Explorer', icon: '🧭' },
    { label: 'Shorts', icon: '🎬' },
    { label: 'Abonnements', icon: '📺' },
    { divider: true },
    { label: 'Bibliothèque', icon: '📚' },
    { label: 'Historique', icon: '🕒' }
  ];
}
