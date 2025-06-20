import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Obtiene el token JWT del localStorage
        const token = localStorage.getItem('token');
        // Si existe el token, clona la petición y agrega el header Authorization
        if (token)
            req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        // Envía la petición al siguiente handler
        return next.handle(req);
    }
}