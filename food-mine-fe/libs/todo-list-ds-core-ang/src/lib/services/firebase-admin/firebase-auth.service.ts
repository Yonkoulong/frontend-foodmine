import { Injectable } from "@angular/core";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Injectable({
    providedIn: 'root'
})

export class FirebaseAuthService {
    private auth = getAuth();

    // Google Login 
    signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(this.auth, provider);
    }

    // Facebook Login
    signInWithFacebook() {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(this.auth, provider);
    }

    // logout
    logout() {
        return this.auth.signOut();
    }
}