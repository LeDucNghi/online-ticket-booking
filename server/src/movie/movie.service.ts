import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from 'src/schemas/movie.schema';

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

  async getMovie(id: string): Promise<Movie | undefined> {
    if (!id) {
      throw new HttpException('Somethings is missing🤔', HttpStatus.NOT_FOUND);
    } else {
      const movie = await this.movieModel.findOne({ id: id });

      return movie;
    }
  }
}
