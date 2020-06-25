import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlGeneratorComponent } from './url-generator/url-generator.component'
import { GeneratedURLSComponent } from './generated-urls/generated-urls.component';

const routes: Routes = [
  { path: '', redirectTo:'/urlGenerator', pathMatch: 'full' },
  { path: 'urlGenerator', component: UrlGeneratorComponent },
  { path: 'getURLS', component: GeneratedURLSComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
