import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {STATIC} from '../../../../services/global';
import { PDFDocumentProxy } from 'pdfjs-dist';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-libro-lector',
  templateUrl: './libro-lector.component.html',
  styleUrls: ['./libro-lector.component.css']
})
export class LibroLectorComponent implements OnInit {
  @ViewChild("pdfViewer") private pdfComponent;
  pdfSrc: string = '';
  zoom: number = 1;
  currentPage=1;
  pages: number;
  stringToSearch: string;
  constructor(private titleService:Title,private route:ActivatedRoute) { 
    this.setViewerSource();
    this.ponerTituloAPagina();
  }

  ngOnInit() {
    
  }
  ponerTituloAPagina(){
    this.titleService.setTitle("Lector de Libro");
  }

  setViewerSource(){
    this.pdfSrc= STATIC.archivo_publicacion_libro+ this.route.snapshot.paramMap.get("idLibro");
  }

  zoomIn(){
    if(this.zoom<2)
      this.zoom=parseFloat((this.zoom+0.05).toFixed(2));
  }

  zoomOut(){
    if(this.zoom>0.5)
      this.zoom= parseFloat((this.zoom-0.05).toFixed(2));
  }
  siguientePagina(){
    if(this.currentPage<this.pages)
      this.currentPage=this.currentPage+1;
  }

  anteriorPagina(){
    if(this.currentPage>1)
      this.currentPage=this.currentPage-1;
  }

  truncar(numero: Number){
    return parseInt(numero.toString());
  }
  callBackFn(pdf: PDFDocumentProxy) {
    this.pages = pdf.numPages;
 }

 search(stringToSearch: string) {
  this.pdfComponent.pdfFindController.executeCommand('find', {
    caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
  });  
}


}
