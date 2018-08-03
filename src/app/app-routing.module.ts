import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

// Routes
const routes: Routes = [
  {
    path: '',
    component: PocetnaComponent
  },
  {
    path: 'kuhinje',
    component: KuhinjeComponent
  },
  {
    path: 'klizni-plakari',
    component: KlizniPlakariComponent
  },
  {
    path: 'standardni-plakari',
    component: StandardniPlakariComponent
  },
  {
    path: 'dnevne-sobe',
    component: DnevneSobeComponent
  },
  {
    path: 'decije-sobe',
    component: DnevneSobeComponent
  },
  {
    path: 'adaptacije',
    component: AdaptacijeComponent
  },
  {
    path: 'kontakt',
    component: KontaktComponent
  },
  {
    path: 'kontakt-ok',
    component: KontaktOkComponent
  },
  {
    path: 'kontakt-error',
    component: KontaktErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
