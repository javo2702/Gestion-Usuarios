import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './modules/componentes/log-in/log-in.component';
import { NotFoundComponent } from './modules/componentes/not-found/not-found.component';
import { AsideNavComponent } from './shared/componentes/aside-nav/aside-nav.component';
import { HeaderComponent } from './shared/componentes/header/header.component';
import { LayoutComponent } from './shared/componentes/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth/auth.service';
import { AuthGuard } from './shared/guard/auth.guard';
import { GestionModule } from './modules/gestion/gestion.module';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NotFoundComponent,
    AsideNavComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GestionModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
