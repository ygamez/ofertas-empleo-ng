import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    SidemenuComponent, 
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [  
    SidemenuComponent,
  ],
})
export class SharedModule { }
