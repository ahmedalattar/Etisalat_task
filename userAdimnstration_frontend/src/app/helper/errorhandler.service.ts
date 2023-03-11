import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {HttpErrorMessage} from './HttpErrorMessage';
import {AppAlert} from "./AppAlert";
import {ToastrService} from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService implements HttpInterceptor {
  constructor(private toastrService: ToastrService) {
  }

  HttpErrorMsg: HttpErrorMessage = new HttpErrorMessage(this.toastrService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      retry(0),
      catchError((err: HttpErrorResponse) => {
        if (err.error instanceof ErrorEvent) {
          AppAlert.showToastError('an error goes here', null, 3000);
        } else {
          if (err.statusText === 'OK') {
            this.HttpErrorMsg.handleHttpErrors(err.status,err);
          } else if (err.status === 401) {
            this.HttpErrorMsg.handleHttpErrors(err.status);
          }
        }
        return throwError(err);
      }),
    );
  }
}
