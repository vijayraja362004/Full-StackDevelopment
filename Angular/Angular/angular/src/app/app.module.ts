import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngulaComponent } from './angula/angula.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicenameService } from './servicename.service';


const ROUTES : Routes = [
  {path : 'home',component:HomeComponent},
  {path : 'contact',component:ContactComponent},
  {path : 'about',component:AboutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AngulaComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    provideClientHydration(),
    ServicenameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
