import { Injectable, NgZone } from '@angular/core';
import { Usuario } from './shared/services/usuario';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    usuarioData: any;

    constructor(
        public afs: AngularFirestore,
        public afAuth: AngularFireAuth,
        public router: Router,
        public NgZone: NgZone
    ){
        this.afAuth.authState.subscribe(usuario =>{
            if (usuario) {
                this.usuarioData = usuario;
                localStorage.setItem('usuario', JSON.stringify(this.usuarioData));
                JSON.parse(localStorage.getItem('usuario'));
            }else{
                localStorage.setItem('usuario', null);
                JSON.parse(localStorage.getItem('usuario'));
            }
        })
    }
    SignIn(email, password){
        return this.afAuth.authState.signInWithEmailAndPassword(email, password)
        .them((result)=>{
            this.NgZone.run(() => {
                this.router.navigate(['painel']);
            });
            this.SetUsuarioData(result.usuario);
        }).catch((error)=> {
            window.alert(error.message)
        })
    }
}
