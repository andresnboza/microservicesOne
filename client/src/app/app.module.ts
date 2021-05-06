import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCreationComponent } from './components/products/product-creation/product-creation.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersCreationComponent } from './components/users/users-creation/users-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreationComponent,
    ProductListComponent,
    UsersListComponent,
    UsersCreationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
