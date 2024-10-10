import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { map, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LinkService {

  constructor(private http: HttpClient) {}

  checkUrlSemantic(url: string): boolean {
    const urlRegex = /(http(s)?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    return url.match(urlRegex) != null;
  }

  checkUrlAccessibility(url: string) {
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        return response.status < 400;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(`Error accessing ${url}: `, error);
        return of(false);
      })
    );
  }

}
