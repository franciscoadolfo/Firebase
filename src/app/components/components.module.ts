import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CurveFactory } from 'd3-shape'

import { NavbarComponent } from './navbar/navbar.component';
import { GraficaBarraHorizontalComponent } from './grafica-barra-horizontal/grafica-barra-horizontal.component';




@NgModule({
  declarations: [
    NavbarComponent,
    GraficaBarraHorizontalComponent
  ],
  exports:[
    NavbarComponent,
    GraficaBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
