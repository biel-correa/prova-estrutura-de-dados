import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilaCircularPageComponent } from './pages/fila-circular-page/fila-circular-page.component';
import { FilaPageComponent } from './pages/fila-page/fila-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PilhaPageComponent } from './pages/pilha-page/pilha-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'pilha', component: PilhaPageComponent },
  { path: 'fila', component: FilaPageComponent },
  { path: 'fila-circular', component: FilaCircularPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
