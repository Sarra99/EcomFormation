import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { SigninComponent } from './components/public/signin/signin.component';
import { RegisterComponent } from './components/public/register/register.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { NavbarComponent } from './components/private/shared/navbar/navbar.component';
import { CategoriesListComponent } from './components/private/admin/categories/categories-list/categories-list.component';
import { CategorieAddComponent } from './components/private/admin/categories/categorie-add/categorie-add.component';
import { CategoryUpdateComponent } from './components/private/admin/categories/category-update/category-update.component';
import { ProductsListComponent } from './components/private/admin/produits/products-list/products-list.component';
import { ProductAddComponent } from './components/private/admin/produits/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/admin/produits/product-update/product-update.component';

import { ClientListComponent } from './components/private/admin/clients/client-list/client-list.component';
import { CommandesListComponent } from './components/private/admin/commandes/commandes-list/commandes-list.component';
import { CommandeAddComponent } from './components/private/admin/commandes/commande-add/commande-add.component';
import { CommandeUpdateComponent } from './components/private/admin/commandes/commande-update/commande-update.component';
import { GestionProfilComponent } from './components/private/client/profile/gestion-profil/gestion-profil.component';

import { CommandesClientListComponent } from './components/private/client/commandes/commandes-client-list/commandes-client-list.component';
import { ForgotPasswordComponent } from './components/public/forgot-password/forgot-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SigninComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    CategoriesListComponent,
    CategorieAddComponent,
    CategoryUpdateComponent,
    ProductsListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ClientListComponent,
    CommandesListComponent,
    CommandeAddComponent,
    CommandeUpdateComponent,
    GestionProfilComponent,
    CommandesClientListComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
