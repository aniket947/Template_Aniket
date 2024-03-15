import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AddEditTemplateComponent } from './features/template/add-edit-template/add-edit-template.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { TemplateListComponent } from './features/template/template-list/template-list.component';
import { UnderDevelopmentComponent } from './features/under-development/under-development.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'templates', component: NavBarComponent,
    children: [
      { path: '', component: TemplateListComponent },
      { path: 'add-edit-template', component: AddEditTemplateComponent },
      { path: 'under-development', component: UnderDevelopmentComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
