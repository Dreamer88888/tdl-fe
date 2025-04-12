import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        map(event => {
            if (event instanceof HttpResponse) {
                const body = event.body;

                if (body && body.responseSchema && body.outputSchema) {
                    return event.clone({body: body.outputSchema});
                }
            }
            return event;
        }),
        catchError((error: HttpErrorResponse) => {
            const errorMessage =
                error.error?.responseSchema?.message ||
                'Unknown error';

            window.alert(errorMessage);

            return throwError(() => new Error(errorMessage));
        })
    );
  }

}