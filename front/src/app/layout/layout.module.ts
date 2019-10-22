import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [LayoutComponent, BodyComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent, BodyComponent, HeaderComponent, FooterComponent]
})
export class LayoutModule { }
