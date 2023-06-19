import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { AboutComponent } from './shared/components/about/about.component';


const routes : Routes = [
  { 
    path: '', redirectTo: 'product', pathMatch: 'full' 
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'404',
    component : NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo : '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
