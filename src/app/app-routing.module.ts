import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeComponentPageComponent } from './components/qr-code-component-page/qr-code-component-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [

  // Default route that loads the QR code component.
  { path: '', component: QrCodeComponentPageComponent },

  // Wildcard route that catches all undefined routes and loads the NotFound component.
  { path: '**', component: NotFoundPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
