import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {STATIC} from '../../../services/global';
import { Title } from '@angular/platform-browser';
import {Helper} from '../../../helper/helper'
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  helper: Helper;

  private categoriaBusqueda;
  private campoBusqueda;

  constructor(private titleService: Title,private renderer: Renderer2, private router: Router) { 
    this.helper = new Helper();
    this.inicializarCamposyControles();
  }

  ngOnInit() {  
   this.ponerTituloAPagina();
  }

  ponerTituloAPagina(){
    this.titleService.setTitle(STATIC.APP_NAME);
  }

  inicializarCamposyControles(){
    this.categoriaBusqueda = new FormControl();
    this.categoriaBusqueda.value=STATIC.ALL_TYPE_SEARCH;
    this.campoBusqueda = new FormControl();
  }

  buscar(){
    this.eliminarEspaciosDeCampos();
    if(this.campoBusqueda.value!="" && this.campoBusqueda.value){
      this.router.navigate(["resultados/",this.categoriaBusqueda.value,{busqueda:this.campoBusqueda.value}]);
    }
    
    
  }
  
  esBusquedaGeneralDeCualquierTipo(){
    return this.campoBusqueda.value!="" && this.campoBusqueda.value!=null;
  }

  eliminarEspaciosDeCampos(){
    this.campoBusqueda.value = this.campoBusqueda.value?this.helper.trimString(this.campoBusqueda.value):"";
  }


}

