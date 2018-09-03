import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swedavia';

  names: string;

  onNames(event: any) {
    this.names = event.target.value;
  }

  animation() {
    const anima = document.querySelector('aside');
    anima.className = 'helloAnim';
    console.log(anima.className);
    console.log(anima);
    anima.style.transform = '(0, 0)';
  }
}
