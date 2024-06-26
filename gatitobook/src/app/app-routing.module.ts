import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { LoginGuard } from './autenticacao/login.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren:()=> import('./home/home.module').then((m) =>m.HomeModule),
  canLoad: [LoginGuard]
   },
   {path: 'animais',
    loadChildren: ()=> import('./animais/animais.module').then((m) => m.AnimaisModule),
    canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
