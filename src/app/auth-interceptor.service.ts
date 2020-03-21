import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const userId = sessionStorage.getItem("userId");
        if (userId == null || req.url.startsWith("https://maps")) {
            return next.handle(req);
        } else {
            const modifiedReq = req.clone({headers: new HttpHeaders().set("userId", userId)});
            return next.handle(modifiedReq);
        }
    }
}