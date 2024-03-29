import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    const { apiUrl } = environment;

    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getTheme(themeID: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${themeID}`);
  }

  getPosts(limit?: number) {
    const { apiUrl } = environment;

    let url = `${apiUrl}/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Post[]>(url);
  }

  createTheme(themeName: string, postText: string) {
    const { apiUrl } = environment;
    return this.http.post<Theme>(`${apiUrl}/themes`, { themeName, postText });
  }

  getUserInfo() {
    return localStorage.getItem('[user]');
  }
}
