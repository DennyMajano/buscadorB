import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda/busqueda.component';
import { ResultadoComponent } from './busqueda/resultado/resultado.component';
import {FormsModule} from '@angular/forms';
import { LibroDetalleComponent } from './publicaciones/libros/libro-detalle/libro-detalle.component';
import { ArchivoDetalleComponent } from './publicaciones/archivos/archivo-detalle/archivo-detalle.component';
import { NavbarComponent } from './complementos/navbar/navbar.component';
import { MultimediaDetalleComponent } from './publicaciones/multimedia/multimedia-detalle/multimedia-detalle.component';
import { TextoDetalleComponent } from './publicaciones/texto/texto-detalle/texto-detalle.component';
import { LibroLectorComponent } from './publicaciones/libros/libro-lector/libro-lector.component';
import {ReactiveFormsModule} from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ArchivoLectorComponent } from './publicaciones/archivos/archivo-lector/archivo-lector.component';
import { FooterComponent } from './complementos/footer/footer.component';
import { NotFoundComponent } from './complementos/not-found/not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    BusquedaComponent, 
    ResultadoComponent, 
    
    LibroDetalleComponent, 
    ArchivoDetalleComponent, NavbarComponent, MultimediaDetalleComponent, TextoDetalleComponent, LibroLectorComponent, ArchivoLectorComponent, FooterComponent, NotFoundComponent],
  exports:[
    BusquedaComponent,
    ResultadoComponent,
    LibroDetalleComponent,
    ArchivoDetalleComponent,
    FooterComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PdfViewerModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ComponentesModule { }
