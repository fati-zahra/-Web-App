import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './firstapp/components/add/add.component';
import { MenuComponent } from './firstapp/components/menu/menu.component';
import { ProductComponent } from './firstapp/components/product/product.component';
import { UpdateComponent } from './firstapp/components/update/update.component';
import { UserComponent } from './firstapp/components/user/user.component';

const routes: Routes = [
  {path :"MenuComponent", component:MenuComponent},
  {path :"add", component:AddComponent},
  {path :"product", component:ProductComponent},
  {path :"user_list", component:UserComponent},
  {path :"update/:id", component:UpdateComponent},
 

  { path: '', redirectTo: '/product', pathMatch: 'full' },



];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
