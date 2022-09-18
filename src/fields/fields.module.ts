import { Module } from '@nestjs/common';
import { FieldsService } from './fields.service';
import { FieldsController } from './fields.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Field, FieldSchema } from './entities/field.entity';
import {
  Statement,
  StatementSchema,
} from 'src/statements/entities/statement.entity';

@Module({
  controllers: [FieldsController],
  providers: [FieldsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Field.name,
        schema: FieldSchema,
      },
      {
        name: Statement.name,
        schema: StatementSchema,
      },
    ]),
  ],
})
export class FieldsModule {}
