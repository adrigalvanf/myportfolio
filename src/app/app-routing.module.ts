import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppInglesComponent } from './appingles.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio.component';

const routes: Routes = [
  {path: 'Ingles', component:AppInglesComponent,},
  {path:"", component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
