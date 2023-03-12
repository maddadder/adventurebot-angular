import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    constructor(private authService: MsalService) {}
    
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRole:Array<string> = route.data.roles;
        let account:AccountInfo = this.authService.instance.getAllAccounts()[0];
    
        if (!account) {
          return false;
        }
        
        if (!account.idTokenClaims?.roles) {
          window.alert('Token does not have roles claim. Please ensure that your account is assigned to an app role and then sign-out and sign-in again.');
          return false;
        }

        const filteredArray = account.idTokenClaims?.roles?.filter(value => expectedRole.includes(value))
        if (!filteredArray.length) {
          window.alert('You do not have access as expected role is missing. Please ensure that your account is assigned to an app role and then sign-out and sign-in again.');
          return false;
        }
        
        return true;
      }
}