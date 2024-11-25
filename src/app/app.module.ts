import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { AjouterComponent } from './componants/ajouter/ajouter.component';
import { ListComponent } from './componants/list/list.component';
import { NotfoundComponent } from './componants/notfound/notfound.component';
import { ProfileComponent } from './componants/profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AjouterComponent,
    ListComponent,
    NotfoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
