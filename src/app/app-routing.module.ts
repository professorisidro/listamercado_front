import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhelistaComponent } from './componentes/detalhelista/detalhelista.component';
import { ListasComponent } from './componentes/listas/listas.component';

const routes: Routes = [
  {path:'', component: ListasComponent},
  {path:'detalhe/:id', component: DetalhelistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
