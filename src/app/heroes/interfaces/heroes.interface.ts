export interface Heroe {
  //Ponemos el id opcional porque al crear un heroe no vamos a tener id por lo cual sera opcional
  id?:               string;
  superhero:        string;
  publisher:        Publisher;
  alter_ego:        string;
  first_appearance: string;
  characters:       string;
  //Agregamos este para pasar la url de imagen, sera opcional porque puede que no tenga
  alt_img?:         string;
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
