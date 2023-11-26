import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = true;
  ngOnInit(): void {
    setInterval(() => {
      this.isVisible = !this.isVisible;
    }, 5000);
  }
}
