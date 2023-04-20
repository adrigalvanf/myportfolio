import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutmeComponent } from './about me/aboutme.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './Contactos/contacto.component';
import { EducacionComponent } from './Educacion/educacion.component';
import { ProyectosComponent } from './Proyectos/proyectos.component';
import { SkillsComponent } from './Skills/skills.component';
import { AboutmeInglesComponent } from './about me/aboutmeingles.component';
import { AppInglesComponent } from './appingles.component';
import { EducationComponent } from './Educacion/education.componentn';
import { InicioComponent } from './inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    SkillsComponent,
    EducacionComponent,
    ProyectosComponent,
    ContactoComponent,
    AboutmeInglesComponent,
    AppInglesComponent,
    EducationComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, AboutmeComponent, SkillsComponent, EducacionComponent, ProyectosComponent, ContactoComponent,AboutmeInglesComponent, AppInglesComponent, EducationComponent, InicioComponent]
})
export class AppModule { }
