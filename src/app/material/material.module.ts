import { NgModule } from '@angular/core';

//Modulos de angular material
import {MatButtonModule} from '@angular/material/button';    //BUTTON
import {MatIconModule} from '@angular/material/icon';        //ICON
import {MatSidenavModule} from '@angular/material/sidenav';  //SIDENAV
import {MatToolbarModule} from '@angular/material/toolbar';  //TOOLBAR

@NgModule({
  exports:[
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
