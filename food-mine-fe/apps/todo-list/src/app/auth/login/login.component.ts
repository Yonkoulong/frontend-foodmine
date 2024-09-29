import { Component } from "@angular/core";
import { FirebaseAuthService } from '@food-mine-fe/todo-list-ds-core-ang';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private authService: FirebaseAuthService) {}

    loginWithGoogle() {
        this.authService.signInWithGoogle().then(userCredential => {
            console.log('Logged in with Google: ', userCredential);
        })
    }

    loginWithFacebook() {
        this.authService.signInWithFacebook().then(userCredential => {
            console.log('Logged in with Facebook: ', userCredential);
            
        })
    }

    logout() {
        this.authService.logout().then(() => {
            console.log('logged out');
            
        })
    }
}