import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of, observable, BehaviorSubject } from 'rxjs'
import { User } from './user'
import { SignupParams } from './signup-params'
import { catchError } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

const authHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _loggedIn = new BehaviorSubject(false)
  userUrl = 'https://insta.nextacademy.com/api/v1/users/'
  signupUrl = 'https://insta.nextacademy.com/api/v1/users/new'

  constructor(private http: HttpClient) {
    const authToken = localStorage.getItem('authToken')
    if (authToken) {
      this._loggedIn.next(true)
    }
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }

  getLoggedIn(): Observable<boolean> {
    return this._loggedIn.asObservable()
  }

  signUp(params: SignupParams, success: () => void) {
    this.http
      .post(this.signupUrl, params, httpOptions)
      .pipe(catchError(this.handleError([])))
      .subscribe(response => {
        const authToken: string = response['auth_token']
        localStorage.setItem('authToken', authToken)
        console.log('Logged In')
        this._loggedIn.next(true)
        success()
      })
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }
}
