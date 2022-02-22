import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:gdJWns6uWIdDZs1x@Cluster0.eupk9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority?directConnection=true'), 
    // MongooseModule.forRoot('mongodb://admin2:123@${mongoHostname}:${mongoPort}/DB-NAME-HERE'), 
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
