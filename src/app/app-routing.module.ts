import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './componentes/busqueda/busqueda/busqueda.component';
import { ResultadoComponent} from './componentes/busqueda/resultado/resultado.component';
import {LibroDetalleComponent} from './componentes/publicaciones/libros/libro-detalle/libro-detalle.component';
import { ArchivoDetalleComponent } from './componentes/publicaciones/archivos/archivo-detalle/archivo-detalle.component';
import { MultimediaDetalleComponent } from './componentes/publicaciones/multimedia/multimedia-detalle/multimedia-detalle.component';
import { TextoDetalleComponent } from './componentes/publicaciones/texto/texto-detalle/texto-detalle.component';
import { LibroLectorComponent } from './componentes/publicaciones/libros/libro-lector/libro-lector.component';
import { ArchivoLectorComponent } from './componentes/publicaciones/archivos/archivo-lector/archivo-lector.component';
import { NotFoundComponent } from './componentes/complementos/not-found/not-found.component';

const routes: Routes = [
  {
    path:  "",
    component: BusquedaComponent
  },
  /*
  {
    path:  "resultados/:busqueda",
    component: ResultadoComponent
  },
  */
  {
    path:  "resultados/:categoria",
    component: ResultadoComponent,
    runGuardsAndResolvers: "always"
  }, 
  {
    path: "libro/info/:id",
    component: LibroDetalleComponent
  },
  {
    path: "archivo/info/:id",
    component: ArchivoDetalleComponent
  },

   
  {
    path: "libro/lector/:idLibro",
    component: LibroLectorComponent
  },
  {
    path: "archivo/lector/:idArchivo",
    component: ArchivoLectorComponent
  },
  
  {
    path: "articulo/:id",
    component: TextoDetalleComponent
  },
  
  {
    path: "multimedia/:id",
    component: MultimediaDetalleComponent
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
