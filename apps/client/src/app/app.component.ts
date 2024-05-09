import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'fse-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';


  private readonly http = inject(HttpClient);
  checkApi() {
    this.http.get('http://localhost:3000/api').subscribe((response) => {
      console.log(response);
    });
  }
}
