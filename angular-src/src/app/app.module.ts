import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.component';
import { routedComponents } from './app-router.component';

import { HomeService } from './services/home.service';
import { ListearticlesService } from './services/LISTE/listearticles.service';
import { ListemoviesService } from './services/LISTE/listemovies.service';
import { ListeseriesService } from './services/LISTE/listeseries.service';
import { ArticleService } from './services/SOLO/article.service';
import { MovieService } from './services/SOLO/movie.service';
import { SerieService } from './services/SOLO/serie.service';
import { RegisterService } from './services/register.service';

import { guardServices } from './app-router.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    AppRouterModule
  ],
  providers: [
    HomeService,
    ListearticlesService,
    ListemoviesService,
    ListeseriesService,
    ArticleService,
    MovieService,
    SerieService,
    RegisterService,
    guardServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
