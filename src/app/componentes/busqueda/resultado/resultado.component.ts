import { Component, OnInit, OnDestroy } from '@angular/core';
import {BusquedasService} from '../../../services/busquedas.service';
import {ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {FormControl} from '@angular/forms';
import {STATIC} from '../../../services/global';
import { Title } from '@angular/platform-browser';
import {Helper} from '../../../helper/helper';
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit, OnDestroy {
  
  private helper: Helper;
  private resultados;
  private busqueda="";
  private categoriaBusqueda="";
  private categoriaValida=true;
  private mensajeInformativo;

  private campoLibroAutor;
  private campoLibroEditorial;
  private campoLibroTitulo;
  private campoLibroGenero;

  private cantidadItemsPorPagina: number;
  private totalItemResultados: number;
  private paginaActual: number;
  private cantidadDePaginas: number;


  navigationSubscription;
  

  constructor(private titleService:Title,private busquedasService: BusquedasService, private route:ActivatedRoute, private router: Router) { 
    
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.helper = new Helper();

    this.inicializarCamposYControles();
    this.buscar();
  }

  inicializarCamposYControles(){
    this.cantidadItemsPorPagina = 2;
    this.paginaActual = 1;

    this.categoriaBusqueda = this.route.snapshot.paramMap.get("categoria");
    this.busqueda = this.route.snapshot.paramMap.get("busqueda");
    this.campoLibroAutor = new FormControl();
    this.campoLibroTitulo = new FormControl();
    this.campoLibroEditorial = new FormControl();
    this.campoLibroGenero = new FormControl();
  }

  ngOnInit() {
    this.ponerTituloAPagina();
  }

  ponerTituloAPagina(){
    if(this.esBusquedaDeLibroPorCamposEspecificos()){
      this.titleService.setTitle("Libro - Buscar en BiblioTECH");
    }
    else{
      console.log(this.esBusquedaGeneralDeCualquierTipo());
      console.log(this.categoriaBusqueda);
      this.titleService.setTitle(this.mensajeInformativo?this.mensajeInformativo:this.busqueda+" - Buscar en BiblioTECH");
    }
    
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }

  buscar(){
    if(this.categoriaBusqueda==STATIC.ALL_TYPE_SEARCH){
      
      this.busquedasService.busquedaGeneral(this.busqueda)
        .subscribe(
        result => {
          
          this.resultados = result["resultados"];
          console.log(this.resultados);
          console.log(this.resultados.imagen);
          this.calculoDePaginacion();
        },
        error => {
          console.log('problemas');
        }
      );
    }
    else if(this.categoriaBusqueda==STATIC.ARCHIVE_TYPE_SEARCH){
      this.busquedasService.busquedaArchivo(this.busqueda)
   
      .subscribe(
        result => {
          console.log(result["resultados"][0]);
          this.resultados = result["resultados"];
        },
        error => {
          console.log('problemas');
        }
      );
    }
    else if(this.categoriaBusqueda==STATIC.GENERAL_BOOK_TYPE_SEARCH){
      this.busquedasService.busquedaGeneralLibro(this.busqueda)
   
      .subscribe(
        result => {
          console.log(result["resultados"]);
          this.resultados = result["resultados"];
        },
        error => {
          console.log('problemas');
        }
      );
    }
  else if(this.categoriaBusqueda==STATIC.TEXT_TYPE_SEARCH){
      this.busquedasService.busquedaTexto(this.busqueda)
   
      .subscribe(
        result => {
          console.log(result["resultados"][0]);
          this.resultados = result["resultados"];
        },
        error => {
          console.log('problemas');
        }
      );
    }
    else if(this.categoriaBusqueda==STATIC.MULTIMEDIA_TYPE_SEARCH){
      this.busquedasService.busquedaMultimedia(this.busqueda)
   
      .subscribe(
        result => {
          console.log(result["resultados"][0]);
          this.resultados = result["resultados"];
        },
        error => {
          console.log('problemas');
        }
      );
    }
    else if(this.categoriaBusqueda==STATIC.BOOK_TYPE_SEARCH){
      let titulo = this.route.snapshot.paramMap.get("titulo");
      let autor = this.route.snapshot.paramMap.get("autor");
      let editorial = this.route.snapshot.paramMap.get("editorial");
      let genero = this.route.snapshot.paramMap.get("genero");
      console.log(genero);

      this.campoLibroAutor.value=autor?autor:"";
      this.campoLibroTitulo.value=titulo?titulo:"";
      this.campoLibroEditorial.value=editorial?editorial:"";
      this.campoLibroGenero.value=genero?genero:"";
      
      this.busquedasService.busquedaLibroAvanzada(autor,editorial,genero, titulo)
      .subscribe(
        result => {
          console.log(result["resultados"][0]);
          this.resultados = result["resultados"];
        },
        error => {
          console.log('problemas');
        }
      );
    }
    else{
      this.categoriaValida = false;
      this.mensajeInformativo = "Categoria no válida";
      this.categoriaBusqueda = STATIC.ALL_TYPE_SEARCH;
    }

    

  }

  

  refresh(){
 
    this.eliminarEspaciosDeCampos();
    if( this.esBusquedaGeneralDeCualquierTipo()){
      this.router.navigate(["resultados",this.categoriaBusqueda,{busqueda:this.busqueda}]);
    }
    else if(this.esBusquedaDeLibroPorCamposEspecificos()){
      let campos = this.elaborarParametrosCamposLibro();
      this.router.navigate(["resultados",this.categoriaBusqueda,campos]);
    }  
  }

  elaborarParametrosCamposLibro(){
    let campos: {[k: string]:any}={};
      campos.categoria=this.categoriaBusqueda;
      if(this.campoLibroAutor.value) campos.autor =this.campoLibroAutor.value;
      if(this.campoLibroEditorial.value) campos.editorial =this.campoLibroEditorial.value;
      if(this.campoLibroGenero.value) campos.genero =this.campoLibroGenero.value;
      if(this.campoLibroTitulo.value) campos.titulo =this.campoLibroTitulo.value;
      return campos;
  }
  sonCamposLibroNulos(): boolean{
    return (this.campoLibroAutor.value!="" && this.campoLibroAutor.value!=null) || (this.campoLibroEditorial.value!="" && this.campoLibroEditorial.value!=null) || (this.campoLibroGenero.value!="" && this.campoLibroGenero.value!=null) || (this.campoLibroTitulo.value!="" && this.campoLibroTitulo.value!=null);
  }

  esBusquedaDeLibroPorCamposEspecificos(){
    return this.categoriaBusqueda==STATIC.BOOK_TYPE_SEARCH && this.sonCamposLibroNulos();
  }
  esBusquedaGeneralDeCualquierTipo(){
  return (this.categoriaBusqueda==STATIC.GENERAL_BOOK_TYPE_SEARCH || this.categoriaBusqueda == STATIC.ALL_TYPE_SEARCH || this.categoriaBusqueda == STATIC.ARCHIVE_TYPE_SEARCH || this.categoriaBusqueda == STATIC.MULTIMEDIA_TYPE_SEARCH || this.categoriaBusqueda == STATIC.TEXT_TYPE_SEARCH) && this.busqueda!="";
  }

  esCategoriaDeBusquedaValida(){
    return this.esBusquedaDeLibroPorCamposEspecificos() || this.esBusquedaGeneralDeCualquierTipo();
  }
  

  eliminarEspaciosDeCampos(){
    this.busqueda =   this.busqueda?this.helper.trimString(  this.busqueda):"";
    this.campoLibroAutor.value = this.campoLibroAutor.value?this.helper.trimString(this.campoLibroAutor.value):"";
    this.campoLibroEditorial.value = this.campoLibroEditorial.value?this.helper.trimString(this.campoLibroEditorial.value): "";
    this.campoLibroGenero.value = this.campoLibroGenero.value?this.helper.trimString(this.campoLibroGenero.value):"";
    this.campoLibroTitulo.value = this.campoLibroTitulo.value?this.helper.trimString(this.campoLibroTitulo.value):"";
  }



  calculoDePaginacion(){
    this.totalItemResultados = this.resultados.length;
    this.cantidadDePaginas = Math.ceil(this.totalItemResultados/this.cantidadItemsPorPagina)
  }



}

