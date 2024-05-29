export type Genre = "horror" | "comedian" | "action";

export interface Movie {
  id: string;
  name: string;
  images: string[];
  banner: string;
  genre: Genre[];
  realeaseDate: Date;
}
