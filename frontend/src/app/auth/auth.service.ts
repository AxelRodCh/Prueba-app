// Servicio de autenticación para Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' }) // Hace que el servicio esté disponible en toda la app
export class AuthService {
    private apiUrl = 'http://localhost:3000/auth'; // URL base del backend para autenticación

    constructor(private http: HttpClient) { }

    // Método para registrar un usuario nuevo
    register(data: { nombre: string, email: string, password: string }) {
        return this.http.post(`${this.apiUrl}/register`, data);
    }

    // Método para iniciar sesión
    login(data: { email: string, password: string }) {
        return this.http.post<{ token: string }>(`${this.apiUrl}/login`, data)
            // Guarda el token JWT en localStorage al hacer login exitoso
            .pipe(tap(res => localStorage.setItem('token', res.token)));
    }

    // Método para cerrar sesión (elimina el token)
    logout(){
        localStorage.removeItem('token');
    }

    // Verifica si el usuario está logueado (si existe el token)
    isLoggedIn(): boolean{
        return !!localStorage.getItem('token');
    }
}