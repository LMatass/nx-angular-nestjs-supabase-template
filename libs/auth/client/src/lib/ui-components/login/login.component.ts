import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@Component({
  selector: 'nx-angular-nest-template-login',
  standalone: true,
  imports: [CommonModule, RouterLink,ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  private readonly authService: AuthService = inject(AuthService);

  login(): void {
    this.authService.login(this.email, this.password);
  }
}
