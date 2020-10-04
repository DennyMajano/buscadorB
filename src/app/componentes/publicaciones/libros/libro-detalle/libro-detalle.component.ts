import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PublicacionesService} from '../../../../services/publicaciones.service';
import {STATIC} from '../../../../services/global';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit {
    id: string;
    imagen_url: String;
    info = null;

    constructor(private titleService: Title,private route:ActivatedRoute, private publicacionesService:PublicacionesService,private router: Router) {
      this.inicializarControles();
      this.obtenerDatosDeLibro();
    } 
  
    ngOnInit() {}
    
    inicializarControles(){
      this.id = this.route.snapshot.paramMap.get("id"); 
    }

    obtenerDatosDeLibro(){
      this.publicacionesService.getInfoLibro(this.id).subscribe(
        result => {
          this.info=result;
          this.titleService.setTitle(this.info.tema);
          this.imagen_url=STATIC.imagen_publicacion_libro+this.info.imagen; 
        },
        error => {
          console.log('problemas');
        }
      );
    }
    
    abrirLector(){
      window.open(STATIC.url_client +"libro/lector/"+this.info.archivo,'_blank');
    }
  
  }
  