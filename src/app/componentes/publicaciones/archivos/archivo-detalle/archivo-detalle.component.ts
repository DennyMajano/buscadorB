import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PublicacionesService} from '../../../../services/publicaciones.service';
import {STATIC} from '../../../../services/global';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-archivo-detalle',
  templateUrl: './archivo-detalle.component.html',
  styleUrls: ['./archivo-detalle.component.css']
})
export class ArchivoDetalleComponent implements OnInit {
  info = null;
  imagen_url: string;
  id: string;

  constructor(private titleService:Title,private route:ActivatedRoute, private publicacionesService:PublicacionesService,private router: Router) {
    this.inicializarControles();
    this.obtenerDatosDeArchivo();
   
  }

  ngOnInit() {
   
  }
  ponerTituloAPagina(){
    this.titleService.setTitle(this.info.tema);
  }
  inicializarControles(){
    this.id = this.route.snapshot.paramMap.get("id");
  }

  obtenerDatosDeArchivo(){
    this.publicacionesService.getInfoArchivo(this.id).subscribe(
      result => {
        console.log(result);
        this.info=result;
        this.imagen_url=STATIC.imagen_publicacion_archivo+this.info.imagen
        this.ponerTituloAPagina();
      },
      error => {
        console.log('problemas');
      }
    );
  }

}
