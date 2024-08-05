import { Movie, MovieSchema } from 'src/schemas/movie.schema';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  providers: [MovieService],
  controllers: [MovieController],
  exports: [MovieService],
})
export class MovieModule {}
