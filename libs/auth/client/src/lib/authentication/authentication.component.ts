import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'nx-angular-nest-template-authentication',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent {
  userAuthenticated = inject(AuthService).isLogged();
  private readonly router = inject(Router);
  
  constructor(){
    effect(() => {
      if (this.userAuthenticated()){
        this.navigateHome()
      }
    });
  }

  private navigateHome(): void {
    this.router.navigate(['/']);
  }
}
