import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: User | undefined;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.user = JSON.parse(this.api.getUserInfo() || '{}');
  }
}
