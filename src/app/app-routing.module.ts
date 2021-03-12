import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieAddComponent } from './components/private/admin/categories/categorie-add/categorie-add.component';
import { CategoriesListComponent } from './components/private/admin/categories/categories-list/categories-list.component';
import { CategoryUpdateComponent } from './components/private/admin/categories/category-update/category-update.component';
import { ClientAddComponent } from './components/private/admin/clients/client-add/client-add.component';
import { ClientListComponent } from './components/private/admin/clients/client-list/client-list.component';
import { ClientUpdateComponent } from './components/private/admin/clients/client-update/client-update.component';
import { CommandeAddComponent } from './components/private/admin/commandes/commande-add/commande-add.component';
import { CommandeUpdateComponent } from './components/private/admin/commandes/commande-update/commande-update.component';
import { CommandesListComponent } from './components/private/admin/commandes/commandes-list/commandes-list.component';
import { ProductAddComponent } from './components/private/admin/produits/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/admin/produits/product-update/product-update.component';
import { ProductsListComponent } from './components/private/admin/produits/products-list/products-list.component';
import { CommandesClientListComponent } from './components/private/client/commandes/commandes-client-list/commandes-client-list.component';
import { GestionProfilComponent } from './components/private/client/profile/gestion-profil/gestion-profil.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/public/forgot-password/forgot-password.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { RegisterComponent } from './components/public/register/register.component';
import { SigninComponent } from './components/public/signin/signin.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: LandingPageComponent
  },
  {
    path: "forgotPass",
    component: ForgotPasswordComponent
  },
  {
    path: "login",
    component: SigninComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "admin",
    children: [
      {
        path: "categories",
        children:[
          {
            path: "list",
            component: CategoriesListComponent
          },
          {
            path: "add",
            component: CategorieAddComponent
          },
          {
            path: "update",
            component: CategoryUpdateComponent
          }
        ]
      },
      {
        path: "products",
        children:[
          {
            path: "list",
            component: ProductsListComponent
          },
          {
            path: "add",
            component: ProductAddComponent
          },
          {
            path: "update",
            component: ProductUpdateComponent
          }
        ]
      },
      {
        path: "clients",
        children:[
          {
            path: "list",
            component: ClientListComponent
          },
          {
            path: "add",
            component: ClientAddComponent
          },
          {
            path: "update",
            component: ClientUpdateComponent
          }
        ]
      },
      {
        path: "commandes",
        children:[
          {
            path: "list",
            component: CommandesListComponent
          },
          {
            path: "add",
            component: CommandeAddComponent
          },
          {
            path: "update",
            component: CommandeUpdateComponent
          }
        ]
      }

    ]
  },
  {
    path: "client",
    children: [
      {
        path: "profile",
        component: GestionProfilComponent
      },
      {
        path: "commandes",
        children:[
          {
            path: "list",
            component: CommandesClientListComponent
          }
        ]
      }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
