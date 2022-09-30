import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './firstapp/components/menu/menu.component';
import { NavbarComponent } from './firstapp/components/navbar/navbar.component';
import { ProductComponent } from './firstapp/components/product/product.component';
import {FormsModule} from '@angular/forms';
import { AddComponent } from './firstapp/components/add/add.component';
import { TippyModule, tooltipVariation, popperVariation } from '@ngneat/helipopper';
import { UserComponent } from './firstapp/components/user/user.component';
import { UpdateComponent } from './firstapp/components/update/update.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    MenuComponent,
    ProductComponent,
    AddComponent,
    UserComponent,
    UpdateComponent,
    
    
  ],
  
  imports: [
    CommonModule,
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TippyModule.forRoot({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      }})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
