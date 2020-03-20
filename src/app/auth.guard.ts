import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree {
        const userId = sessionStorage.getItem("userId");
        if (userId != null) {
            return true;
        } else {
            return this.router.createUrlTree(['/welcome']);
        }
    }
}