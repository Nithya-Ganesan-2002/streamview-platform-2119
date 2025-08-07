import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from '../video-card/video-card.component';

/**
 * Main feed area with category filters and video cards grid.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  standalone: true,
  imports: [CommonModule, VideoCardComponent]
})
export class FeedComponent {
  filters = [
    'Tous', 'Deep House', 'Dua Lipa', 'Histoire', 'En direct',
    'Rock français', 'Jazz', 'Comédie à sketches', 'Comédies',
    'Ballon de football', 'Jeux vidéo'
  ];
  activeFilter = this.filters[0];
  videos = [
    // Sample data based on Figma extracted asset
    {
      thumbnailUrl: 'https://images.unsplash.com/photo-1495562569060-ba104c15f499?auto=format&fit=crop&w=400&q=80',
      avatarUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=36&q=80',
      title: 'Ma première fois au ski',
      channel: 'MichelVar',
      meta: '1 M de vues • il y a 15 jours',
      duration: '3:15',
      live: true
    },
    {
      thumbnailUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      avatarUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&w=36&q=80',
      title: 'Behind the moon',
      channel: 'Jane Cooper',
      meta: '1 M de vues • il y a 15 jours',
      duration: '3:15',
      live: false
    },
    {
      thumbnailUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      avatarUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=36&q=80',
      title: 'Top 10 cities of the world',
      channel: 'Leslie Alexander',
      meta: '1 M de vues • il y a 15 jours',
      duration: '3:15',
      live: false
    },
    {
      thumbnailUrl: 'https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=400&q=80',
      avatarUrl: 'https://images.unsplash.com/photo-1465101178521-c1a9136a8867?auto=format&fit=facearea&w=36&q=80',
      title: 'Best street art in Soho',
      channel: 'Bessie Cooper',
      meta: '1 M de vues • il y a 15 jours',
      duration: '3:15',
      live: false
    }
    // More rows/videos could be added
  ];

  // PUBLIC_INTERFACE
  setActiveFilter(filter: string) {
    this.activeFilter = filter;
    // TODO: implement filter logic based on selected filter
  }
}
