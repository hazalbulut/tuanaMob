import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { CountUpModule } from 'countup.js-angular2';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { PhotoGalleryModule } from 'src/app/components/gallery/gallery.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        RouterModule,
        HeaderModule,
        CountUpModule,
        PhotoGalleryModule,
        InViewportModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule { }
