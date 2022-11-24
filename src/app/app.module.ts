import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { ListSmartphoneComponent } from './components/list-smartphone/list-smartphone.component';
import { CreateSmartphoneComponent } from './components/create-smartphone/create-smartphone.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteSmartphoneComponent } from './components/delete-smartphone/delete-smartphone.component';
import { EditSmartphoneComponent } from './components/edit-smartphone/edit-smartphone.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSmartphoneComponent,
    CreateSmartphoneComponent,
    DeleteSmartphoneComponent,
    EditSmartphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
