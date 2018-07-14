import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { THeaderComponent } from './components/t-header/t-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodytestComponent } from './components/bodytest/bodytest.component';
import { SHeaderComponent } from './components/s-header/s-header.component';
import { AddarticleComponent } from './components/addarticle/addarticle.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SearchComponent } from './components/search/search.component';
import { LikeComponent } from './components/like/like.component';

import { SeriesComponent } from './components/SOLO/series/series.component';
import { SaisonComponent } from './components/SOLO/saison/saison.component';
import { MovieComponent } from './components/SOLO/movie/movie.component';
import { ArticleComponent } from './components/SOLO/article/article.component';
import { CommentsComponent } from './components/SOLO/comments/comments.component';

import { ListearticlesComponent } from './components/LISTE/listearticles/listearticles.component';
import { ListeseriesComponent } from './components/LISTE/listeseries/listeseries.component';
import { ListemoviesComponent } from './components/LISTE/listemovies/listemovies.component';

import { ConnectionGuard } from './guards/connection.guard';
import { DeconnectionGuard } from './guards/deconnection.guard';


const appRoutes: Routes = [

	{ path: '', component: HomeComponent },
	{ path: 'addarticle', component: AddarticleComponent, canActivate: [ConnectionGuard] },
	{ path: 'login', component: LoginComponent, canActivate: [DeconnectionGuard] },
	{ path: 'register', component: RegisterComponent, canActivate: [DeconnectionGuard] },
	{ path: 'profil', component: ProfilComponent, canActivate: [ConnectionGuard] },
	{ path: 'search', component: SearchComponent },
	{ path: 'liked', component: LikeComponent },

	{ path: 'series', component: SeriesComponent },
	{ path: 'saison', component: SaisonComponent },
	{ path: 'movie', component: MovieComponent },
	{ path: 'article', component: ArticleComponent },

	{ path: 'listeseries', component: ListeseriesComponent },
	{ path: 'listemovies', component: ListemoviesComponent },
	{ path: 'listearticles', component: ListearticlesComponent }

]

@NgModule({

	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]

})

export class AppRouterModule {}

export const routedComponents = [
	HomeComponent,
	HeaderComponent,
	THeaderComponent,
	FooterComponent,
	BodytestComponent,
	SHeaderComponent,
    SeriesComponent,
    SaisonComponent,
    MovieComponent,
    ArticleComponent,
    CommentsComponent,
    ListearticlesComponent,
    ListeseriesComponent,
    ListemoviesComponent,
    AddarticleComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    SearchComponent,
    LikeComponent
];

export const guardServices = [
	ConnectionGuard,
	DeconnectionGuard
];