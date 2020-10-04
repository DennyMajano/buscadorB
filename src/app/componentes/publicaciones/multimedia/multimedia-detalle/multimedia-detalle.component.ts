import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import {STATIC} from '../../../../services/global';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-multimedia-detalle',
  templateUrl: './multimedia-detalle.component.html',
  styleUrls: ['./multimedia-detalle.component.css']
})
export class MultimediaDetalleComponent implements OnInit {
  id: string;
  info = null;
  video_url : String;
  image_url: String;
  constructor(private titleService:Title,private route: ActivatedRoute, private publicacionesService: PublicacionesService) {
    this.inicializarControles();
    this.obtenerDatosDeMultimedia();
    
  }

  ngOnInit() {
  }

  ponerTituloAPagina(){
    this.titleService.setTitle(this.info.tema+" - Multimedia");
  }

  inicializarControles(){
    this.id = this.route.snapshot.paramMap.get("id");
  }

  obtenerDatosDeMultimedia(){
    this.publicacionesService.getInfoMultimedia(this.id).subscribe(
      result => {
        console.log(result);
        this.info=result;
        this.ponerTituloAPagina();
        this.video_url = STATIC.video_publicacion_multimedia+this.info.video;
        this.image_url = STATIC.imagen_publicacion_multimedia+this.info.image;
        console.log(this.image_url);
      },
      error => {
        console.log('problemas');
      }
    );
  }

}
