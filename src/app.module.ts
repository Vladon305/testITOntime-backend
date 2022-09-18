import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatementsModule } from './statements/statements.module';
import { FieldsModule } from './fields/fields.module';

@Module({
  imports: [
    StatementsModule,
    MongooseModule.forRoot(
      `mongodb+srv://Vladon305:15asassdsdB@cluster0.bsvwrf6.mongodb.net/?retryWrites=true`,
    ),
    FieldsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
