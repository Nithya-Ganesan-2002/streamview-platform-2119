import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Top navigation bar with logo, search, action buttons
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class NavbarComponent {
  searchQuery: string = '';

  // PUBLIC_INTERFACE
  onSearch() {
    // Placeholder for search event
    // Optionally emit event or implement navigation/filter logic
  }
}
