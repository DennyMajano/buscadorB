const base_url = "https://api-bibliotech.servicios.saynets.com/";
const url_public = "http:///192.168.1.100:8081/";
const url_client = "http:///bibliotech.local/";
const APP_NAME = "BiblioTECH";

export const STATIC = {
  APP_NAME,
  url_client,
  url: base_url,
  public_profile_url: url_public + "images/profile/",
  imagen_publicacion_archivo: url_public + "publications/archive/images/",
  archivo_publicacion_archivo: url_public + "publications/archive/archive/",
  imagen_publicacion_libro: url_public + "publications/book/images/",
  archivo_publicacion_libro: url_public + "publications/book/archive/",
  imagen_publicacion_multimedia: url_public + "publications/multimedia/images/",
  video_publicacion_multimedia: url_public + "publications/multimedia/video/",

  TEXT_TYPE_SEARCH: "articulo",
  ARCHIVE_TYPE_SEARCH: "archivo",
  MULTIMEDIA_TYPE_SEARCH: "multimedia",
  BOOK_TYPE_SEARCH: "libro",
  GENERAL_BOOK_TYPE_SEARCH: "libro_general",
  ALL_TYPE_SEARCH: "todo"
};
