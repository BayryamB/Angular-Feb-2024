import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  constructor(private api: ApiService) {}
  createTheme(ev: Event, themeName: string, postText: string) {
    ev.preventDefault();
    console.log(themeName, postText);

    if (!themeName || !postText) {
      alert('All fields are required!');
      return;
    }
    this.api.createTheme(themeName, postText).subscribe((theme) => {
      console.log(theme);
      alert('Theme created!');
    });
  }
}
