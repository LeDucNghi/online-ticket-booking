import { Movie } from "@/models";
import { faker } from "@faker-js/faker";

export const movies: Movie[] = [...Array(15)].map(() => ({
  id: `1`,
  name: faker.person.firstName(),
  banner: faker.image.url(),
  images: [faker.image.url()],
  genre: ["action"],
  realeaseDate: faker.date.between({
    from: "2000-01-01T00:00:00.000Z",
    to: "2030-01-01T00:00:00.000Z",
  }),
}));
