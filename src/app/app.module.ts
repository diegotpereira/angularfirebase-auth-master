import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelComponent } from './componente/painel/painel.component';
import { SignInComponent } from './componente/sign-in/sign-in.component';
import { SignUpComponent } from './componente/sign-up/sign-up.component';
import { EsqueceuSenhaComponent } from './componente/esqueceu-senha/esqueceu-senha.component';
import { VerifiqueEmailComponent } from './componente/verifique-email/verifique-email.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    SignInComponent,
    SignUpComponent,
    EsqueceuSenhaComponent,
    VerifiqueEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
