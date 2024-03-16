import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;
  path: string | undefined = '';
  constructor(
    private api: ApiService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.path = this.router.url.split('/').pop();

    this.api.getTheme(this.path as string).subscribe((theme) => {
      this.theme = theme;
    });
  }

  isLogedIn() {
    return this.userService.isLogedIn;
  }

  getUsername() {
    return this.userService.user?.username;
  }
}
