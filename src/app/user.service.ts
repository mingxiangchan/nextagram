import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from './user'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: User = null
  userUrl = 'https://insta.nextacademy.com/api/v1/users/'

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }

  /**
   * retrieves the current user if able to
   */
  getCurrentUser(): User | null {
    return this.currentUser
  }
}
