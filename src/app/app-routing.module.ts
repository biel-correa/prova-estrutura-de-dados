import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilhaPageComponent } from './pages/pilha-page/pilha-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'pilha', pathMatch: 'full' },
  { path: 'pilha', component: PilhaPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
