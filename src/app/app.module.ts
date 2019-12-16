import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeModule } from './views/home/home.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CommonModule, HomeModule, HeaderModule, AppRoutingModule,],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
