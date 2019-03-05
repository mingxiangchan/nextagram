import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getUserImages(userId: number): Observable<string[]> {
    const url = `https://insta.nextacademy.com/api/v1/images?userId=${userId}`

    return this.http.get<string[]>(url)
  }
}
