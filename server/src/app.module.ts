import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://leducnghi28122000hiie:ggf5PwW6yCfVcPAx@cluster0.h3tlrhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
