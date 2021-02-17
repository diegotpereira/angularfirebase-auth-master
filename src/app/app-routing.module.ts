import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../app/componente/sign-in/sign-in.component';
import { SignUpComponent } from '../app/componente/sign-up/sign-up.component';
import { PainelComponent } from '../app/componente/painel/painel.component';
import { EsqueceuSenhaComponent } from '../app/componente/esqueceu-senha/esqueceu-senha.component';
import { AuthGuard } from "../../shared/guard/auth.guard";
import { VerifiqueEmailComponent } from '../app/componente/verifique-email/verifique-email.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'sign-in', pathMatch: 'full'}, 
  {
    path: 'sign-in', component: SignInComponent},
  { path: 'registro-usuario', component: SignUpComponent},
  { path: 'painel', component: PainelComponent }, 
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent},
  { path: 'verifique-email', component: VerifiqueEmailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
