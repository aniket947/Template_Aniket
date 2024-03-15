import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './core/login/login.component';
import { TemplateListComponent } from './features/template/template-list/template-list.component';
import { AddEditTemplateComponent } from './features/template/add-edit-template/add-edit-template.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { UnderDevelopmentComponent } from './features/under-development/under-development.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    NavBarComponent,
    TemplateListComponent,
    AddEditTemplateComponent,
    UnderDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    RouterModule.forRoot([])
  ],
  providers: [UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }