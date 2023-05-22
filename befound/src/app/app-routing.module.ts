import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroDesaparecidoComponent } from './cadastro-desaparecido/cadastro-desaparecido.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FeedComponent } from './feed/feed.component';



//IMPORTS DOS COMPONENTES DO PORTAL

const routes: Routes = [

    // -----ROTAS DO PORTAL --------
    { path: "cadastro-desaparecido", component: CadastroDesaparecidoComponent},
    { path: "cadastro-usuario", component: CadastroUsuarioComponent},
    { path: "feed", component: FeedComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }