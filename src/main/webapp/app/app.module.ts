import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jh671SharedModule } from 'app/shared/shared.module';
import { Jh671CoreModule } from 'app/core/core.module';
import { Jh671AppRoutingModule } from './app-routing.module';
import { Jh671HomeModule } from './home/home.module';
import { Jh671EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jh671SharedModule,
    Jh671CoreModule,
    Jh671HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jh671EntityModule,
    Jh671AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Jh671AppModule {}
