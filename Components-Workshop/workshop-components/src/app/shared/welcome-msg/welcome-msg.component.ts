import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { UserRoutingModule } from 'src/app/user/user-routing.module';
@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css'],
})
export class WelcomeMsgComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  get isLogedIn(): boolean {
    return this.userService.isLogedIn;
  }
}
