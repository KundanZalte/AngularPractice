import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { materialImports } from './material-imports';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavigationComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    UsdInrPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    materialImports,
    ReactiveFormsModule
  ],
  exports: [
    UsdInrPipe,
    LoginComponent
  ]
})
export class SharedModule { }
