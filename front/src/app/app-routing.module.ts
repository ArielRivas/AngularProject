import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharaComponent } from './pages/chara/chara.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: "chara", component: CharaComponent
  },
  {
    path: "gestion", component: GestionComponent
  },
  {
    path: "details", component: DetailsComponent
  },
  {
    path: "", pathMatch: "full", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
