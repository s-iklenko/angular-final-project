import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {FriendsService} from "../Services/friends.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private readonly friendsService: FriendsService
  ) {
  }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.friendsService.getToken()}`
      }
    })
    return next.handle(request);
  }
}
