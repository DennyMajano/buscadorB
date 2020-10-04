import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class BusquedasService {
  constructor(private http: HttpClient) {}

  busquedaGeneral(cadena: String) {
    return this.http.get(
      "http://192.168.1.100:8081/bibliotech/api/busqueda?busqueda=" + cadena
    );
  }

  busquedaGeneralLibro(cadena: String) {
    return this.http.get(
      "http://192.168.1.100:8081/bibliotech/api/busqueda/libros?busqueda=" +
        cadena
    );
  }

  busquedaArchivo(cadena: String) {
    return this.http.get(
      "http://192.168.1.100:8081/bibliotech/api/busqueda/archivos?busqueda=" +
        cadena
    );
  }
  busquedaTexto(cadena: String) {
    return this.http.get(
      "http://192.168.1.100:8081/bibliotech/api/busqueda/texto?busqueda=" +
        cadena
    );
  }
  busquedaMultimedia(cadena: String) {
    return this.http.get(
      "http://192.168.1.100:8081/bibliotech/api/busqueda/multimedia?busqueda=" +
        cadena
    );
  }
  busquedaLibroAvanzada(
    autor: string,
    editorial: string,
    genero: string,
    titulo: string
  ) {
    console.log("autor: " + autor);
    let params = new HttpParams();
    if (autor != null && autor != "") {
      params = params.set("autor", autor);
    }
    if (editorial != null && editorial != "")
      params = params.set("editorial", editorial);
    if (genero != null && genero != "") params = params.set("genero", genero);
    if (titulo != null && titulo != "") params = params.set("titulo", titulo);

    console.log("params" + params.toString());
    //return this.http.get("http://192.168.1.100:8081/bibliotech/api/busqueda/libros/avanzada?autor="+autor+"&editorial="+editorial+"&genero="+genero+"&anio_edicion="+anio+"&titulo="+titulo);
    return this.http.get(
      "http://192.168.1.100:8081/bibliotech/api/busqueda/libros/avanzada",
      { params }
    );
  }
}
