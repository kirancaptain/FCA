import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../app-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { ProfileDetailsComponent } from '../components/profile-details/profile-details.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [HomeComponent, WelcomeComponent, HeaderComponent,
    FooterComponent,
    ProfileDetailsComponent]
})
export class HomeModule { }
