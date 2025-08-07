import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Card to display a single video preview.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VideoCardComponent {
  @Input() thumbnailUrl: string = '';
  @Input() avatarUrl: string = '';
  @Input() title: string = '';
  @Input() channel: string = '';
  @Input() meta: string = '';
  @Input() duration: string = '';
  @Input() live: boolean = false;
}
