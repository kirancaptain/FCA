import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { LoaderComponent } from '../components/loader/loader.component';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(_loading: LoaderComponent) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const request = req.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
    return next.handle(request);
  }
}
