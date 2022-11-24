import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListSmartphoneComponent} from "./components/list-smartphone/list-smartphone.component";
import {CreateSmartphoneComponent} from "./components/create-smartphone/create-smartphone.component";
import {DeleteSmartphoneComponent} from "./components/delete-smartphone/delete-smartphone.component";
import {EditSmartphoneComponent} from "./components/edit-smartphone/edit-smartphone.component";


const routes: Routes = [
  {
    path: '',
    component: ListSmartphoneComponent
  },
  {
    path:'save',
    component: CreateSmartphoneComponent
  },
  {
    path:'delete/:id',
    component: DeleteSmartphoneComponent
  },
  {
    path:'edit/:id',
    component: EditSmartphoneComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
