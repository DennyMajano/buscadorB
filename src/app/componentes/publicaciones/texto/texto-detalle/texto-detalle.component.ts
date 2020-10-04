import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import {STATIC} from '../../../../services/global';
import { ActivatedRoute } from '@angular/router';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { Title } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: 'app-texto-detalle',
  templateUrl: './texto-detalle.component.html',
  styleUrls: ['./texto-detalle.component.css']
})
export class TextoDetalleComponent implements OnInit {
  @ViewChild("contenidoDiv") contenido;
  id: string;
  info = null;
  constructor(private titleService:Title, private route:ActivatedRoute, private publicacionesService: PublicacionesService, private render2: Renderer2) { 
   this.inicializarControles();
   this.obtenerDatosTexto();
  }

  ngOnInit() {
   
  }

  inicializarControles(){
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ponerTituloAPagina(){
    this.titleService.setTitle(this.info.tema+" - Artículo");
  }


  obtenerDatosTexto(){
    this.publicacionesService.getInfoTexto(this.id).subscribe(
      response => {
        this.info = response;
        this.ponerTituloAPagina();
        
      },
      error => {
        console.log('problemas');
      }
    );
  }

  mostrarArticulo(){
    let mostrado= false;
    if(this.info){
      $("#contenido").append(this.info.contenido);
      mostrado = true;
    }
    return mostrado;
  }



}
