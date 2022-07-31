import { NgModule } from '@angular/core';

//Modulos de angular material
import {MatButtonModule} from '@angular/material/button';    //BUTTON
import {MatIconModule} from '@angular/material/icon';        //ICON
import {MatListModule} from '@angular/material/list';        //LIST
import {MatSidenavModule} from '@angular/material/sidenav';  //SIDENAV
import {MatToolbarModule} from '@angular/material/toolbar';  //TOOLBAR

@NgModule({
  exports:[
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
