import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserDataService } from './user-data.service';

@Injectable({
    providedIn: 'root'
})
export class ProfileResolverService implements Resolve<any> {
    constructor(private userService: UserDataService) { }
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.userService.getUserList();
    }
}