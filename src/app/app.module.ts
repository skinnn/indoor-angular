import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Components
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
// Pages
import { PocetnaComponent } from './components/pages/pocetna/pocetna.component';
import { KuhinjeComponent } from './components/pages/kuhinje/kuhinje.component';
import { KlizniPlakariComponent } from './components/pages/klizni-plakari/klizni-plakari.component';
import { StandardniPlakariComponent } from './components/pages/standardni-plakari/standardni-plakari.component';
import { DnevneSobeComponent } from './components/pages/dnevne-sobe/dnevne-sobe.component';
import { DecijeSobeComponent } from './components/pages/decije-sobe/decije-sobe.component';
import { AdaptacijeComponent } from './components/pages/adaptacije/adaptacije.component';
import { KontaktComponent } from './components/pages/kontakt/kontakt.component';
import { KontaktOkComponent } from './components/pages/kontakt-ok/kontakt-ok.component';
import { KontaktErrorComponent } from './components/pages/kontakt-error/kontakt-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PocetnaComponent,
    KuhinjeComponent,
    KlizniPlakariComponent,
    StandardniPlakariComponent,
    DnevneSobeComponent,
    DecijeSobeComponent,
    AdaptacijeComponent,
    KontaktComponent,
    KontaktOkComponent,
    KontaktErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
